
import { Icon, generic } from "../../index";

/**
 * A component that renders the `place-of-worship` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/place-of-worship?s=sharp-duotone-solid place-of-worship}
 * @preview ![place-of-worship](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MkwwIDUxMmwxNjAgMCAwLTI0MEwwIDM1MnptNDgwLTgwbDAgMjQwIDE2MCAwIDAtMTYwTDQ4MCAyNzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgMTg1LjZMMjI0IDk2IDMyMCAwbDk2IDk2IDAgODkuNkw0ODAgMjI0bDAgMjg4LTk2IDAgMC05NmMwLTM1LjMtMjguNy02NC02NC02NHMtNjQgMjguNy02NCA2NGwwIDk2LTk2IDAgMC0yODggNjQtMzguNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PlaceOfWorship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352L0 512l160 0 0-240L0 352zm480-80l0 240 160 0 0-160L480 272z" />
            <path d="M224 185.6L224 96 320 0l96 96 0 89.6L480 224l0 288-96 0 0-96c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 96-96 0 0-288 64-38.4z" />
    </Icon>
);

export default PlaceOfWorship;