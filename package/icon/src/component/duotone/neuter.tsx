
import { Icon, generic } from "../../index";

/**
 * A component that renders the `neuter` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/neuter?s=duotone neuter}
 * @preview ![neuter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMTIgMTc2YTgwIDgwIDAgMSAwIDE2MCAwIDgwIDgwIDAgMSAwIC0xNjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTgwIDE3NmExMTIgMTEyIDAgMSAxIDIyNCAwQTExMiAxMTIgMCAxIDEgODAgMTc2ek0yMjQgMzQ5LjFjODEuOS0xNSAxNDQtODYuOCAxNDQtMTczLjFDMzY4IDc4LjggMjg5LjIgMCAxOTIgMFMxNiA3OC44IDE2IDE3NmMwIDg2LjMgNjIuMSAxNTguMSAxNDQgMTczLjFMMTYwIDQ4MGMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMybDAtMTMwLjl6Ii8+PC9zdmc+|width=32|height=32)
 */
const Neuter: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M112 176a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
            <path d="M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1L160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-130.9z" />
    </Icon>
);

export default Neuter;