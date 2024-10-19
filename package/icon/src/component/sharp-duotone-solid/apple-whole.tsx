
import { Icon, generic } from "../../index";

/**
 * A component that renders the `apple-whole` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apple-whole?s=sharp-duotone-solid apple-whole}
 * @preview ![apple-whole](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMDggODBsMCAxNiAwIDE2IDE2IDAgMTYgMGM0NC4yIDAgODAtMzUuOCA4MC04MGwwLTE2IDAtMTZMMzA0IDAgMjg4IDBjLTQ0LjIgMC04MCAzNS44LTgwIDgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTEyIDEyOEMzNS43IDEyOCAwIDIxMS43IDAgMjg4QzAgNDE2IDgwIDUxMiAxNjAgNTEybDY0LTE2IDY0IDE2YzgwIDAgMTYwLTk2IDE2MC0yMjRjMC03Ni4zLTM1LjctMTYwLTExMi0xNjBMMjI0IDE2MCAxMTIgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const AppleWhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M208 80l0 16 0 16 16 0 16 0c44.2 0 80-35.8 80-80l0-16 0-16L304 0 288 0c-44.2 0-80 35.8-80 80z" />
            <path d="M112 128C35.7 128 0 211.7 0 288C0 416 80 512 160 512l64-16 64 16c80 0 160-96 160-224c0-76.3-35.7-160-112-160L224 160 112 128z" />
    </Icon>
);

export default AppleWhole;