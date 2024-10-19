
import { Icon } from "../../index";

/**
 * A component that renders the `person-biking` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-biking?s=thin person-biking}
 * @preview ![person-biking](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgOTZDNDI2LjUwOCA5NiA0NDggNzQuNTEgNDQ4IDQ4UzQyNi41MDggMCA0MDAgMFMzNTIgMjEuNDkgMzUyIDQ4UzM3My40OTIgOTYgNDAwIDk2Wk00MDAgMTZDNDE3LjY0NSAxNiA0MzIgMzAuMzU1IDQzMiA0OFM0MTcuNjQ1IDgwIDQwMCA4MFMzNjggNjUuNjQ1IDM2OCA0OFMzODIuMzU1IDE2IDQwMCAxNlpNNDEzLjUgMTkySDUwNEM1MDguNDA2IDE5MiA1MTIgMTg4LjQyMiA1MTIgMTg0UzUwOC40MDYgMTc2IDUwNCAxNzZINDEzLjVDNDExLjcxOSAxNzYgNDA5Ljk2OSAxNzUuNDA2IDQwOC41NjIgMTc0LjMxMkwzNjEuNTMxIDEzNy43MzRDMzQ2LjY1NiAxMjYuMTA5IDMyNS4zNzUgMTI2LjY1NiAzMTAuOTM3IDEzOC45MzhMMjUyLjA5NCAxODkuMzc1QzI0Mi4zMTIgMTk3Ljc4MSAyMzcuMjUgMjA5Ljk4NCAyMzguMjUgMjIyLjg1OUMyMzkuMjgxIDIzNS43NSAyNDYuMTU2IDI0Ny4wMzEgMjU3LjE4OCAyNTMuODEzTDMxNi4xODggMjkwLjE0MUMzMTguNTMxIDI5MS41NzggMzIwIDI5NC4xNzIgMzIwIDI5Ni45MzhWNDQwQzMyMCA0NDQuNDIyIDMyMy41OTQgNDQ4IDMyOCA0NDhTMzM2IDQ0NC40MjIgMzM2IDQ0MFYyOTYuOTM4QzMzNiAyODguNjQxIDMzMS42MjUgMjgwLjgxMyAzMjQuNTYyIDI3Ni41TDI2NS41NjIgMjQwLjE4OEMyNTguOTY5IDIzNi4xMjUgMjU0LjgxMiAyMjkuMzQ0IDI1NC4yMTkgMjIxLjYwOUMyNTMuNjI1IDIxMy44OTEgMjU2LjYyNSAyMDYuNTYyIDI2Mi41MzEgMjAxLjUzMUwzMjEuMzc1IDE1MS4wOTRDMzI5Ljk5OSAxNDMuNzE5IDM0Mi43ODEgMTQzLjM5MSAzNTEuNzE5IDE1MC4zNTlMMzk4Ljc1IDE4Ni45MzhDNDAyLjkzOCAxOTAuMjAzIDQwOC4xODggMTkyIDQxMy41IDE5MlpNNTEyIDI1NkM0NDEuMzA5IDI1NiAzODQgMzEzLjMwNyAzODQgMzg0QzM4NCA0NTQuNjkxIDQ0MS4zMDkgNTEyIDUxMiA1MTJTNjQwIDQ1NC42OTEgNjQwIDM4NEM2NDAgMzEzLjMwNyA1ODIuNjkxIDI1NiA1MTIgMjU2Wk01MTIgNDk2QzQ1MC4yNDIgNDk2IDQwMCA0NDUuNzU4IDQwMCAzODRTNDUwLjI0MiAyNzIgNTEyIDI3MlM2MjQgMzIyLjI0MiA2MjQgMzg0UzU3My43NTggNDk2IDUxMiA0OTZaTTEyOCAyNTZDNTcuMzA5IDI1NiAwIDMxMy4zMDcgMCAzODRDMCA0NTQuNjkxIDU3LjMwOSA1MTIgMTI4IDUxMlMyNTYgNDU0LjY5MSAyNTYgMzg0QzI1NiAzMTMuMzA3IDE5OC42OTEgMjU2IDEyOCAyNTZaTTEyOCA0OTZDNjYuMjQyIDQ5NiAxNiA0NDUuNzU4IDE2IDM4NFM2Ni4yNDIgMjcyIDEyOCAyNzJTMjQwIDMyMi4yNDIgMjQwIDM4NFMxODkuNzU4IDQ5NiAxMjggNDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PersonBiking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M400 96C426.508 96 448 74.51 448 48S426.508 0 400 0S352 21.49 352 48S373.492 96 400 96ZM400 16C417.645 16 432 30.355 432 48S417.645 80 400 80S368 65.645 368 48S382.355 16 400 16ZM413.5 192H504C508.406 192 512 188.422 512 184S508.406 176 504 176H413.5C411.719 176 409.969 175.406 408.562 174.312L361.531 137.734C346.656 126.109 325.375 126.656 310.937 138.938L252.094 189.375C242.312 197.781 237.25 209.984 238.25 222.859C239.281 235.75 246.156 247.031 257.188 253.813L316.188 290.141C318.531 291.578 320 294.172 320 296.938V440C320 444.422 323.594 448 328 448S336 444.422 336 440V296.938C336 288.641 331.625 280.813 324.562 276.5L265.562 240.188C258.969 236.125 254.812 229.344 254.219 221.609C253.625 213.891 256.625 206.562 262.531 201.531L321.375 151.094C329.999 143.719 342.781 143.391 351.719 150.359L398.75 186.938C402.938 190.203 408.188 192 413.5 192ZM512 256C441.309 256 384 313.307 384 384C384 454.691 441.309 512 512 512S640 454.691 640 384C640 313.307 582.691 256 512 256ZM512 496C450.242 496 400 445.758 400 384S450.242 272 512 272S624 322.242 624 384S573.758 496 512 496ZM128 256C57.309 256 0 313.307 0 384C0 454.691 57.309 512 128 512S256 454.691 256 384C256 313.307 198.691 256 128 256ZM128 496C66.242 496 16 445.758 16 384S66.242 272 128 272S240 322.242 240 384S189.758 496 128 496Z" />
    </Icon>
);

export default PersonBiking;