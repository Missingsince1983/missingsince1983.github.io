import { ColorTheme, SettingsColor } from "./types";

export interface SettingsStateInterface {
  currentColorTheme: SettingsColor;
}

const state: SettingsStateInterface = {
  currentColorTheme: ColorTheme.WHITE
}

export default state
