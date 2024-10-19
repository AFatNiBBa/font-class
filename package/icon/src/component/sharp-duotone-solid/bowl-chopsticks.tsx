
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-chopsticks` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-chopsticks?s=sharp-duotone-solid bowl-chopsticks}
 * @preview ![bowl-chopsticks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDUxMiAwbDAgNDhMMCAxMjggMCA5NnptMCA0OGw1MTItMTYgMCA0OEwwIDE3NmwwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTEyIDIyNEwwIDIyNGwzLjYgNjEuMkM4LjUgMzY4LjEgNTggNDM4LjIgMTI4IDQ3Mi45bDAgMzkuMSAyNTYgMCAwLTM5LjFjNzAtMzQuNiAxMTkuNS0xMDQuOCAxMjQuNC0xODcuN0w1MTIgMjI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BowlChopsticks: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L512 0l0 48L0 128 0 96zm0 48l512-16 0 48L0 176l0-32z" />
            <path d="M512 224L0 224l3.6 61.2C8.5 368.1 58 438.2 128 472.9l0 39.1 256 0 0-39.1c70-34.6 119.5-104.8 124.4-187.7L512 224z" />
    </Icon>
);

export default BowlChopsticks;