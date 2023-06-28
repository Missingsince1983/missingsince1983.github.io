export interface GeneralStateInterface {
  isGeneralLoading: boolean;
  visibleSpaceHeight: number;
  remSize: number;
}

const state: GeneralStateInterface = {
  isGeneralLoading: true,
  visibleSpaceHeight: 0,
  remSize: 10
}

export default state
