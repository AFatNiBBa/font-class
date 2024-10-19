
import { Icon, generic } from "../../index";

/**
 * A component that renders the `litecoin-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/litecoin-sign?s=duotone litecoin-sign}
 * @preview ![litecoin-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xLjIgMjY0LjhDNS4yIDI3OC44IDE4LjEgMjg4IDMyIDI4OGMyLjkgMCA1LjktLjQgOC44LTEuMkw2NCAyODAuMWMwLTIyLjIgMC00NC40IDAtNjYuNkwyMy4yIDIyNS4yYy0xNyA0LjktMjYuOCAyMi42LTIyIDM5LjZ6TTEyOCAxOTUuM2wwIDY2LjYgMTM2LjgtMzkuMWMxNC4xLTQgMjMuMi0xNi44IDIzLjItMzAuOGMwLTIuOS0uNC01LjktMS4yLTguOGMtNC45LTE3LTIyLjYtMjYuOC0zOS42LTIyTDEyOCAxOTUuM3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDMyYzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgMzUyIDIyNCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMyTDk2IDQ4MGMtMTcuNyAwLTMyLTE0LjMtMzItMzJMNjQgNjRjMC0xNy43IDE0LjMtMzIgMzItMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const LitecoinSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M1.2 264.8C5.2 278.8 18.1 288 32 288c2.9 0 5.9-.4 8.8-1.2L64 280.1c0-22.2 0-44.4 0-66.6L23.2 225.2c-17 4.9-26.8 22.6-22 39.6zM128 195.3l0 66.6 136.8-39.1c14.1-4 23.2-16.8 23.2-30.8c0-2.9-.4-5.9-1.2-8.8c-4.9-17-22.6-26.8-39.6-22L128 195.3z" />
            <path d="M96 32c17.7 0 32 14.3 32 32l0 352 224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 480c-17.7 0-32-14.3-32-32L64 64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default LitecoinSign;