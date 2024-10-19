
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `angle-down` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angle-down?s=regular angle-down}
 * @preview ![angle-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjAuNTAxIDIxNy40NTNMMjA4LjQ5OSAzNjEuNDM4QzIwMy44NzQgMzY1LjgxMiAxOTcuOTM3IDM2OCAxOTEuOTk5IDM2OFMxODAuMTI0IDM2NS44MTIgMTc1LjQ5OSAzNjEuNDM4TDIzLjQ5NyAyMTcuNDUzQzEzLjg3MiAyMDguMzI4IDEzLjQ2NiAxOTMuMTQxIDIyLjU2IDE4My41MkMzMS42ODUgMTczLjgzMiA0Ni45MzUgMTczLjQ4OCA1Ni40OTcgMTgyLjU4MkwxOTEuOTk5IDMxMC45NDVMMzI3LjUwMSAxODIuNTgyQzMzNy4wNjQgMTczLjQ4OCAzNTIuMjUxIDE3My44MzIgMzYxLjQzOSAxODMuNTJDMzcwLjUzMiAxOTMuMTQxIDM3MC4xMjYgMjA4LjMyOCAzNjAuNTAxIDIxNy40NTNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function AngleDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M360.501 217.453L208.499 361.438C203.874 365.812 197.937 368 191.999 368S180.124 365.812 175.499 361.438L23.497 217.453C13.872 208.328 13.466 193.141 22.56 183.52C31.685 173.832 46.935 173.488 56.497 182.582L191.999 310.945L327.501 182.582C337.064 173.488 352.251 173.832 361.439 183.52C370.532 193.141 370.126 208.328 360.501 217.453Z" />
        </Icon>
    </>
}