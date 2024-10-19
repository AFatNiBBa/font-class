
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `franc-sign` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/franc-sign?s=regular franc-sign}
 * @preview ![franc-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNTZDMzIwIDY5LjI1IDMwOS4yNSA4MCAyOTYgODBIOTZWMTkySDI2NEMyNzcuMjUgMTkyIDI4OCAyMDIuNzUgMjg4IDIxNlMyNzcuMjUgMjQwIDI2NCAyNDBIOTZWMzIwSDIwMEMyMTMuMjUgMzIwIDIyNCAzMzAuNzUgMjI0IDM0NFMyMTMuMjUgMzY4IDIwMCAzNjhIOTZWNDU2Qzk2IDQ2OS4yNSA4NS4yNSA0ODAgNzIgNDgwUzQ4IDQ2OS4yNSA0OCA0NTZWMzY4SDI0QzEwLjc1IDM2OCAwIDM1Ny4yNSAwIDM0NFMxMC43NSAzMjAgMjQgMzIwSDQ4VjU2QzQ4IDQyLjc1IDU4Ljc1IDMyIDcyIDMySDI5NkMzMDkuMjUgMzIgMzIwIDQyLjc1IDMyMCA1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FrancSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 56C320 69.25 309.25 80 296 80H96V192H264C277.25 192 288 202.75 288 216S277.25 240 264 240H96V320H200C213.25 320 224 330.75 224 344S213.25 368 200 368H96V456C96 469.25 85.25 480 72 480S48 469.25 48 456V368H24C10.75 368 0 357.25 0 344S10.75 320 24 320H48V56C48 42.75 58.75 32 72 32H296C309.25 32 320 42.75 320 56Z" />
        </Icon>
    </>
}