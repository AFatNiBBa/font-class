
import { Icon, generic } from "../../index";

/**
 * A component that renders the `alien` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alien?s=sharp-duotone-solid alien}
 * @preview ![alien](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNEMwIDQwMCAyMjQgNTEyIDIyNCA1MTJzMjI0LTExMiAyMjQtMjg4QzQ0OCAxMDAuMyAzNDcuNyAwIDIyNCAwUzAgMTAwLjMgMCAyMjR6bTY0IDBsNDggMGM0NC4yIDAgODAgMzUuOCA4MCA4MGwwIDE2LTQ4IDBjLTQ0LjIgMC04MC0zNS44LTgwLTgwbDAtMTZ6bTE5MiA4MGMwLTQ0LjIgMzUuOC04MCA4MC04MGw0OCAwIDAgMTZjMCA0NC4yLTM1LjggODAtODAgODBsLTQ4IDAgMC0xNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTExMiAyMjRjNDQuMiAwIDgwIDM1LjggODAgODBsMCAxNi00OCAwYy00NC4yIDAtODAtMzUuOC04MC04MGwwLTE2IDQ4IDB6bTIyNCAwbDQ4IDAgMCAxNmMwIDQ0LjItMzUuOCA4MC04MCA4MGwtNDggMCAwLTE2YzAtNDQuMiAzNS44LTgwIDgwLTgweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Alien: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224C0 400 224 512 224 512s224-112 224-288C448 100.3 347.7 0 224 0S0 100.3 0 224zm64 0l48 0c44.2 0 80 35.8 80 80l0 16-48 0c-44.2 0-80-35.8-80-80l0-16zm192 80c0-44.2 35.8-80 80-80l48 0 0 16c0 44.2-35.8 80-80 80l-48 0 0-16z" />
            <path d="M112 224c44.2 0 80 35.8 80 80l0 16-48 0c-44.2 0-80-35.8-80-80l0-16 48 0zm224 0l48 0 0 16c0 44.2-35.8 80-80 80l-48 0 0-16c0-44.2 35.8-80 80-80z" />
    </Icon>
);

export default Alien;