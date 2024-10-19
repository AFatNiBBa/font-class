
import { Icon } from "../../index";

/**
 * A component that renders the `file-audio` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-audio?s=light file-audio}
 * @preview ![file-audio](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjUuMjU2IDEyNS4yNTRMMjU4Ljc0NiAxOC43NDZDMjQ2Ljc0NCA2Ljc0MiAyMzAuNDY1IDAgMjEzLjQ5IDBINjRDMjguNjU0IDAgMCAyOC42NTQgMCA2NFY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjQgNTEySDMyMEMzNTUuMzQ4IDUxMiAzODQgNDgzLjM0NiAzODQgNDQ4VjE3MC41MUMzODQgMTUzLjUzNSAzNzcuMjU4IDEzNy4yNTggMzY1LjI1NiAxMjUuMjU0Wk0yMjQgMzQuMDc2QzIyOC40NzcgMzUuNjQzIDIzMi42NjYgMzcuOTIyIDIzNi4xMTkgNDEuMzc1TDM0Mi42MjcgMTQ3Ljg3OUMzNDYuMDggMTUxLjMzMiAzNDguMzU3IDE1NS41MjMgMzQ5LjkyNCAxNjBIMjQwQzIzMS4xODggMTYwIDIyNCAxNTIuODI4IDIyNCAxNDRWMzQuMDc2Wk0zNTIgNDQ4QzM1MiA0NjUuNjQ1IDMzNy42NDUgNDgwIDMyMCA0ODBINjRDNDYuMzU1IDQ4MCAzMiA0NjUuNjQ1IDMyIDQ0OFY2NEMzMiA0Ni4zNTUgNDYuMzU1IDMyIDY0IDMySDE5MlYxNDRDMTkyIDE3MC40NjkgMjEzLjUzMSAxOTIgMjQwIDE5MkgzNTJWNDQ4Wk0xODIuNzgxIDI0OS41MTZDMTc3LjE4OCAyNDYuODkxIDE3MC41MzEgMjQ3Ljc1IDE2NS43NSAyNTEuNzAzTDEyMi4yMTkgMjg4SDgwQzcxLjE1NiAyODggNjQgMjk1LjE1NiA2NCAzMDRWMzY4QzY0IDM3Ni44NDQgNzEuMTU2IDM4NCA4MCAzODRIMTIyLjIxOUwxNjUuNzUgNDIwLjI5N0MxNjguNjg4IDQyMi43MzQgMTcyLjMxMiA0MjQgMTc2IDQyNEMxNzguMzEyIDQyNCAxODAuNjI1IDQyMy41IDE4Mi43ODEgNDIyLjQ4NEMxODguNDA2IDQxOS44NTkgMTkyIDQxNC4yMDMgMTkyIDQwOFYyNjRDMTkyIDI1Ny43OTcgMTg4LjQwNiAyNTIuMTQxIDE4Mi43ODEgMjQ5LjUxNlpNMTYwIDM3My44NDRMMTM4LjI1IDM1NS43MDNDMTM1LjM3NSAzNTMuMzEyIDEzMS43NSAzNTIgMTI4IDM1Mkg5NlYzMjBIMTI4QzEzMS43NSAzMjAgMTM1LjM3NSAzMTguNjg4IDEzOC4yNSAzMTYuMjk3TDE2MCAyOTguMTU2VjM3My44NDRaTTI4OCAzMzZDMjg4IDM2Ny40MjIgMjcyLjYyNSAzOTYuOTA2IDI0Ni44NDQgNDE0Ljg3NUMyMzkuNTk0IDQxOS45MzggMjM3LjgxMiA0MjkuOTA2IDI0Mi44NzUgNDM3LjE1NkMyNDYgNDQxLjYwOSAyNTAuOTY5IDQ0NCAyNTYgNDQ0QzI1OS4xODggNDQ0IDI2Mi4zNzUgNDQzLjA2MiAyNjUuMTU2IDQ0MS4xMjVDMjk5LjUgNDE3LjE3MiAzMjAgMzc3Ljg3NSAzMjAgMzM2UzI5OS41IDI1NC44MjggMjY1LjE1NiAyMzAuODc1QzI1OCAyMjUuODkxIDI0Ny45NjkgMjI3LjU3OCAyNDIuODc1IDIzNC44NDRDMjM3LjgxMiAyNDIuMDk0IDIzOS41OTQgMjUyLjA2MiAyNDYuODQ0IDI1Ny4xMjVDMjcyLjYyNSAyNzUuMDk0IDI4OCAzMDQuNTc4IDI4OCAzMzZaTTIzNC4xMjUgMjg3LjYwOUMyMjcuMjgxIDI4Mi4wNjMgMjE3LjIxOSAyODMuMDE2IDIxMS42MjUgMjg5Ljg3NUMyMDYuMDMxIDI5Ni43MTkgMjA3LjAzMSAzMDYuNzk3IDIxMy44NzUgMzEyLjM5MUMyMjAuMjE5IDMxNy41NzggMjI0IDMyNi40MDYgMjI0IDMzNlMyMjAuMjE5IDM1NC40MjIgMjEzLjg3NSAzNTkuNjA5QzIwNy4wMzEgMzY1LjIwMyAyMDYuMDMxIDM3NS4yODEgMjExLjYyNSAzODIuMTI1QzIxNC43ODEgMzg2LjAwMSAyMTkuMzc1IDM4OCAyMjQgMzg4QzIyNy41NjIgMzg4IDIzMS4xNTYgMzg2LjgxMiAyMzQuMTI1IDM4NC4zOTFDMjQ3LjgxMiAzNzMuMTg4IDI1NiAzNTUuMDk0IDI1NiAzMzZTMjQ3LjgxMiAyOTguODEyIDIzNC4xMjUgMjg3LjYwOVoiLz48L3N2Zz4=|width=32|height=32)
 */
const FileAudio: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M365.256 125.254L258.746 18.746C246.744 6.742 230.465 0 213.49 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.256 125.254ZM224 34.076C228.477 35.643 232.666 37.922 236.119 41.375L342.627 147.879C346.08 151.332 348.357 155.523 349.924 160H240C231.188 160 224 152.828 224 144V34.076ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448ZM182.781 249.516C177.188 246.891 170.531 247.75 165.75 251.703L122.219 288H80C71.156 288 64 295.156 64 304V368C64 376.844 71.156 384 80 384H122.219L165.75 420.297C168.688 422.734 172.312 424 176 424C178.312 424 180.625 423.5 182.781 422.484C188.406 419.859 192 414.203 192 408V264C192 257.797 188.406 252.141 182.781 249.516ZM160 373.844L138.25 355.703C135.375 353.312 131.75 352 128 352H96V320H128C131.75 320 135.375 318.688 138.25 316.297L160 298.156V373.844ZM288 336C288 367.422 272.625 396.906 246.844 414.875C239.594 419.938 237.812 429.906 242.875 437.156C246 441.609 250.969 444 256 444C259.188 444 262.375 443.062 265.156 441.125C299.5 417.172 320 377.875 320 336S299.5 254.828 265.156 230.875C258 225.891 247.969 227.578 242.875 234.844C237.812 242.094 239.594 252.062 246.844 257.125C272.625 275.094 288 304.578 288 336ZM234.125 287.609C227.281 282.063 217.219 283.016 211.625 289.875C206.031 296.719 207.031 306.797 213.875 312.391C220.219 317.578 224 326.406 224 336S220.219 354.422 213.875 359.609C207.031 365.203 206.031 375.281 211.625 382.125C214.781 386.001 219.375 388 224 388C227.562 388 231.156 386.812 234.125 384.391C247.812 373.188 256 355.094 256 336S247.812 298.812 234.125 287.609Z" />
    </Icon>
);

export default FileAudio;