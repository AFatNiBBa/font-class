
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-ramp` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp?s=duotone truck-ramp}
 * @preview ![truck-ramp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00NDggNDE2YTk2IDk2IDAgMSAwIDE5MiAwIDk2IDk2IDAgMSAwIC0xOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQxNi43IDQwMi41QzQyMy40IDMzOC4yIDQ3Ny45IDI4OCA1NDQgMjg4YzM4LjIgMCA3Mi41IDE2LjggOTYgNDMuM0w2NDAgMCA0MTYgMGMtMzUuMyAwLTY0IDI4LjctNjQgNjRsMCAyODkuOEwzMS42IDQ0MS4xYy0xNy4xIDQuNi0yNy4xIDIyLjItMjIuNSAzOS4zczIyLjIgMjcuMSAzOS4zIDIyLjVMNDE2LjcgNDAyLjV6Ii8+PC9zdmc+|width=32|height=32)
 */
const TruckRamp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M448 416a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
            <path d="M416.7 402.5C423.4 338.2 477.9 288 544 288c38.2 0 72.5 16.8 96 43.3L640 0 416 0c-35.3 0-64 28.7-64 64l0 289.8L31.6 441.1c-17.1 4.6-27.1 22.2-22.5 39.3s22.2 27.1 39.3 22.5L416.7 402.5z" />
    </Icon>
);

export default TruckRamp;