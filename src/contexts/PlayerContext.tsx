import { createContext, ReactNode, useContext, useState } from "react";
import { IEpisode } from "../models/Episode";

type PlayerContextData = {
  episodeList: IEpisode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  isLooping: boolean;
  isShuffling: boolean;
  hasPrevious: boolean;
  hasNext: boolean;
  play: (episode: IEpisode) => void;
  playList: (list: IEpisode[], index: number) => void;
  playNext: () => void;
  playPrevious: () => void;
  togglePlay: () => void;
  toggleLoop: () => void;
  toggleShuffle: () => void;
  setPlayingState: (state: boolean) => void;
  clearPlayerState: () => void;
};

type PlayerContextProviderProps = {
  children: ReactNode;
};

export const PlayerContext = createContext({} as PlayerContextData);

export function PlayerContextProvider({
  children,
}: PlayerContextProviderProps) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  function play(episode: IEpisode) {
    setEpisodeList([episode]);
    setIsPlaying(true);
    setCurrentEpisodeIndex(0);
  }

  function playList(list: IEpisode[], index: number) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function toggleLoop() {
    setIsLooping(!isLooping);
  }

  function toggleShuffle() {
    setIsShuffling(!isShuffling);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  const hasPrevious = currentEpisodeIndex > 0;
  const hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;

  function playPrevious() {
    if (hasPrevious) setCurrentEpisodeIndex(currentEpisodeIndex - 1);
  }

  function playNext() {
    if (isShuffling) {
      const nextRandomEpisodeIndex = Math.floor(
        Math.random() * episodeList.length,
      );
      setCurrentEpisodeIndex(nextRandomEpisodeIndex);
    } else if (hasNext) setCurrentEpisodeIndex(currentEpisodeIndex + 1);
  }

  function clearPlayerState() {
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  }

  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        isPlaying,
        isLooping,
        isShuffling,
        hasPrevious,
        hasNext,
        play,
        playList,
        togglePlay,
        toggleLoop,
        toggleShuffle,
        playNext,
        playPrevious,
        setPlayingState,
        clearPlayerState,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => useContext(PlayerContext);
