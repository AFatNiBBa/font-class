
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-spoon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-spoon?s=sharp-duotone-solid bowl-spoon}
 * @preview ![bowl-spoon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2YzAgNTMgNTAuMSA5NiAxMTIgOTZsMTEyIDAgMC02NCAyNTYgMCAzMiAwIDAtNjQtMzIgMEwyMjQgNjRsMC02NEwxMTIgMEM1MC4xIDAgMCA0MyAwIDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTEyIDIyNEwwIDIyNGwzLjYgNjEuMkM4LjUgMzY4LjEgNTggNDM4LjIgMTI4IDQ3Mi45bDAgMzkuMSAyNTYgMCAwLTM5LjFjNzAtMzQuNiAxMTkuNS0xMDQuOCAxMjQuNC0xODcuN0w1MTIgMjI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BowlSpoon: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96c0 53 50.1 96 112 96l112 0 0-64 256 0 32 0 0-64-32 0L224 64l0-64L112 0C50.1 0 0 43 0 96z" />
            <path d="M512 224L0 224l3.6 61.2C8.5 368.1 58 438.2 128 472.9l0 39.1 256 0 0-39.1c70-34.6 119.5-104.8 124.4-187.7L512 224z" />
    </Icon>
);

export default BowlSpoon;