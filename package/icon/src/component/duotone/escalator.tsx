
import { Icon, generic } from "../../index";

/**
 * A component that renders the `escalator` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/escalator?s=duotone escalator}
 * @preview ![escalator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA0NDhjMCAzNS4zIDI4LjcgNjQgNjQgNjRsOTYgMGMxNS41IDAgMzAuNS01LjYgNDIuMS0xNS44TDQ3MiAyODhsNzIgMGMzNS4zIDAgNjQtMjguNyA2NC02NHMtMjguNy02NC02NC02NGwtOTYgMGMtMTUuNSAwLTMwLjUgNS42LTQyLjEgMTUuOEwxNjggMzg0bC03MiAwYy0zNS4zIDAtNjQgMjguNy02NCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAwYTQ4IDQ4IDAgMSAxIDAgOTYgNDggNDggMCAxIDEgMC05NnptNjQgMTkybDAgMTYuNC0xMjggMTEyTDE5MiAxOTJjMC0zNS4zIDI4LjctNjQgNjQtNjRzNjQgMjguNyA2NCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Escalator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 448c0 35.3 28.7 64 64 64l96 0c15.5 0 30.5-5.6 42.1-15.8L472 288l72 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-96 0c-15.5 0-30.5 5.6-42.1 15.8L168 384l-72 0c-35.3 0-64 28.7-64 64z" />
            <path d="M256 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm64 192l0 16.4-128 112L192 192c0-35.3 28.7-64 64-64s64 28.7 64 64z" />
    </Icon>
);

export default Escalator;