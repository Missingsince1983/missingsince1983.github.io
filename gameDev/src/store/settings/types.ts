export enum ColorTheme {
  WHITE = 'white',
  BLUE = 'blue',
}

export type SettingsColorItemType = {
  colorName: SettingsColor,
  primaryButtonColor: string,
  mainBgColor: string,
  mainTextColor: string
}

export type SettingsColor = ColorTheme.BLUE | ColorTheme.WHITE
