
import { Icon, generic } from "../../index";

/**
 * A component that renders the `meter-droplet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-droplet?s=sharp-duotone-solid meter-droplet}
 * @preview ![meter-droplet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM5Ny40IDExNC42IDUxMiAyNTYgNTEyYzUzLjcgMCAxMDMuNS0xNi41IDE0NC42LTQ0LjdDMzkwIDQ0Ny4yIDM4NCA0MjQuMyAzODQgNDAwbDAtMi4xYzAtMjguMyA4LjItNTYgMjMuNy03OS43TDQ5OS42IDE3N0M0NjYuMyA3NC4zIDM2OS44IDAgMjU2IDBDMTE0LjYgMCAwIDExNC42IDAgMjU2ek0xMjggMTI4bDY0IDAgMCAzMiAwIDMyIDAgMzItNjQgMCAwLTMyIDAtMzIgMC0zMnptOTYgMGw2NCAwIDAgMzIgMCAzMiAwIDMyLTY0IDAgMC0zMiAwLTMyIDAtMzJ6bTk2IDBsNjQgMCAwIDMyIDAgMzIgMCAzMi02NCAwIDAtMzIgMC0zMiAwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDM0LjUgMzM1LjZMNTI4IDE5Mmw5My41IDE0My42YzEyLjEgMTguNSAxOC41IDQwLjIgMTguNSA2Mi4zVjQwMGMwIDYxLjktNTAuMSAxMTItMTEyIDExMnMtMTEyLTUwLjEtMTEyLTExMnYtMi4xYzAtMjIuMSA2LjQtNDMuNyAxOC41LTYyLjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const MeterDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c53.7 0 103.5-16.5 144.6-44.7C390 447.2 384 424.3 384 400l0-2.1c0-28.3 8.2-56 23.7-79.7L499.6 177C466.3 74.3 369.8 0 256 0C114.6 0 0 114.6 0 256zM128 128l64 0 0 32 0 32 0 32-64 0 0-32 0-32 0-32zm96 0l64 0 0 32 0 32 0 32-64 0 0-32 0-32 0-32zm96 0l64 0 0 32 0 32 0 32-64 0 0-32 0-32 0-32z" />
            <path d="M434.5 335.6L528 192l93.5 143.6c12.1 18.5 18.5 40.2 18.5 62.3V400c0 61.9-50.1 112-112 112s-112-50.1-112-112v-2.1c0-22.1 6.4-43.7 18.5-62.3z" />
    </Icon>
);

export default MeterDroplet;