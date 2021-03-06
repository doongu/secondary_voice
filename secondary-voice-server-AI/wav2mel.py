import torch
import os
import numpy as np
from scipy.io.wavfile import read

from lib.tacotron2.layers import TacotronSTFT


MAX_WAV_VALUE = 32768.0

stft = TacotronSTFT(filter_length=1024,
                    hop_length=256,
                    win_length=1024,
                    sampling_rate=22050,
                    mel_fmin=0.0, 
                    mel_fmax=8000.0)

def wav2mel(wav, sr=22050):
    if type(wav) == str:
        sr, wav = read(wav)
    wav = torch.from_numpy(wav)
    audio_norm = wav / MAX_WAV_VALUE
    audio_norm = audio_norm.unsqueeze(0)
    audio_norm = torch.autograd.Variable(audio_norm, requires_grad=False)
    melspec = stft.mel_spectrogram(audio_norm)
    melspec = torch.squeeze(melspec, 0)
    return melspec


if __name__ == "__main__":
    root_dir, _, file_list = next(os.walk("./hifi/"))

    for file in file_list:
        wav_path = os.path.join(root_dir, file)
        print(wav_path)
        basename = wav_path.split('/')[-1].split('.')[0]
        mel = wav2mel(wav_path)
        np.save(f'hifi_out/{basename}.npy', mel)
        print(mel.shape)