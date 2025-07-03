import React from 'react';

export type Digit = number | string;

export interface FlipClockCountdownUnitTimeFormatted {
  readonly current: Digit[];
  readonly next: Digit[];
}

export interface FlipClockCountdownTimeDeltaFormatted {
  readonly days: FlipClockCountdownUnitTimeFormatted;
  readonly hours: FlipClockCountdownUnitTimeFormatted;
  readonly minutes: FlipClockCountdownUnitTimeFormatted;
  readonly seconds: FlipClockCountdownUnitTimeFormatted;
}

export interface FlipClockCountdownTimeDelta {
  readonly total: number;
  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
}

export interface FlipClockCountdownState {
  readonly timeDelta: FlipClockCountdownTimeDelta;
  readonly completed: boolean;
}

export type FlipClockCountdownTimeDeltaFn = (props: FlipClockCountdownState) => void;

export interface FlipClockCountdownProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * The target date to countdown to.
   * It can be a Date object, a timestamp (number), or a date string.
   */
  readonly to: Date | number | string;
  /**
   * Days will be shown in hours.
   *
   * @default false
   */
  readonly daysInHours?: boolean;
  /**
   * Alternative handler for the current time.
   *
   * @default Date.now
   */
  now?: () => Date | number | string;
  /**
   * By default, the countdown will be hidden when it completed (or show children if provided).
   * This will keep the timer in place and stuck at zeros when the countdown is completed.
   */
  hideOnComplete?: boolean;
  /**
   * @deprecated
   * Props to be passed to div element that is container for all elements.
   * You can use this if you want to style or select the whole container.
   */
  readonly containerProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  /**
   * A callback will be called when countdown completed.
   */
  readonly onComplete?: () => void;
  /**
   * A callback will be called every second.
   *
   * @param timeDelta
   * @param completed represents the state of the countdown. `true` if the countdown ended, otherwise `false`.
   */
  readonly onTick?: FlipClockCountdownTimeDeltaFn;
  /**
   * Each element represents the render state of each section (day, hour, minute, second).
   *
   * If `true` section will be rendered, `false` otherwise.
   *
   * @default [true, true, true, true]
   */
  readonly renderMap?: [boolean, boolean, boolean, boolean];
  /**
   * An array of labels used to represent information for each section (day, hour, minute, second).
   *
   * @default ['Days', 'Hours', 'Minutes', 'Seconds']
   */
  readonly labels?: [string, string, string, string];
  /**
   * Set it to `false` if you don't want to show the labels.
   *
   * @default true
   */
  readonly showLabels?: boolean;
  /**
   * Set it to `false` if you don't want to show the separators (colon) between time unit.
   *
   * @default true
   */
  readonly showSeparators?: boolean;
  /**
   * The style will be applied to labels like `font-size`, `color`, etc.
   */
  labelStyle?: React.CSSProperties;
  /**
   * The style will be applied to digit blocks like `font-size`, `color`, `width`, `height`, etc.
   */
  digitBlockStyle?: React.CSSProperties;
  /**
   * The style will be applied to separator (colon), includes `size` and `color`.
   */
  separatorStyle?: {
    color?: React.CSSProperties['color'];
    size?: number | string;
  };
  /**
   * The style will be applied to divider, includes `color` and `height`.
   */
  dividerStyle?: {
    color?: React.CSSProperties['color'];
    height?: React.CSSProperties['borderBottomWidth'];
  };
  /**
   * Duration (in second) when flip card. Valid value in range (0, 1).
   *
   * @default 0.7
   */
  duration?: number;
  /**
   * Whether or not to stop the clock when the visibilityState is hidden,
   * enabling this feature will prevent the component gets derailed if we
   * switch between browser tabs.
   *
   * @default false
   */
  stopOnHiddenVisibility?: boolean;
  /**
   * Custom clock spacing.
   */
  spacing?: {
    /**
     * Space between unit times and separators.
     */
    clock?: number | string;
    /**
     * Space between blocks in each unit of time.
     */
    digitBlock?: number | string;
  };
  /**
   * Whether or not to render the clock on the server.
   * If set to `true`, the clock will be rendered on the server side with zeros.
   *
   * @default false
   */
  renderOnServer?: boolean;
}
