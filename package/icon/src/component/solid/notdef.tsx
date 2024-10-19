
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `notdef` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/notdef?s=solid notdef}
 * @preview ![notdef](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMEg0OEMyMS40OSAwIDAgMjEuNDkgMCA0OFY0NjRDMCA0OTAuNTEgMjEuNDkgNTEyIDQ4IDUxMkgzMzZDMzYyLjUxIDUxMiAzODQgNDkwLjUxIDM4NCA0NjRWNDhDMzg0IDIxLjQ5IDM2Mi41MSAwIDMzNiAwWk0yODEuNTQxIDY0TDE5MiAxOTguMzEyTDEwMi40NTkgNjRIMjgxLjU0MVpNNjQgMTIxLjY4OEwxNTMuNTQxIDI1Nkw2NCAzOTAuMzEyVjEyMS42ODhaTTEwMi40NTkgNDQ4TDE5MiAzMTMuNjg4TDI4MS41NDEgNDQ4SDEwMi40NTlaTTMyMCAzOTAuMzEyTDIzMC40NTkgMjU2TDMyMCAxMjEuNjg4VjM5MC4zMTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Notdef(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M336 0H48C21.49 0 0 21.49 0 48V464C0 490.51 21.49 512 48 512H336C362.51 512 384 490.51 384 464V48C384 21.49 362.51 0 336 0ZM281.541 64L192 198.312L102.459 64H281.541ZM64 121.688L153.541 256L64 390.312V121.688ZM102.459 448L192 313.688L281.541 448H102.459ZM320 390.312L230.459 256L320 121.688V390.312Z" />
        </Icon>
    </>
}