
import { Icon, generic } from "../../index";

/**
 * A component that renders the `envelopes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelopes?s=sharp-duotone-solid envelopes}
 * @preview ![envelopes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMmwwIDU2LjljMi4yIDEuNiA0LjUgMy4yIDYuNyA0LjhDMTgwLjUgMTQ5LjIgMjU4LjIgMjA0LjggMzM2IDI2MC4zYzc3LjgtNTUuNiAxNTUuNS0xMTEuMSAyMzMuMy0xNjYuNmMyLjItMS42IDQuNS0zLjIgNi43LTQuOEw1NzYgMzIgOTYgMzJ6bTAgOTYuMkw5NiAzODRsNDgwIDAgMC0yNTUuOEM0OTkuMSAxODMuMiA0MjIuMiAyMzguMSAzNDUuMyAyOTNjLTMuMSAyLjItNi4yIDQuNC05LjMgNi42Yy0zLjEtMi4yLTYuMi00LjQtOS4zLTYuNkMyNDkuOCAyMzguMSAxNzIuOSAxODMuMiA5NiAxMjguMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMzNiAyOTkuN2w5LjMtNi42TDU3NiAxMjguMmwwLTM5LjMtNi43IDQuOEwzMzYgMjYwLjMgMTAyLjcgOTMuNyA5NiA4OC45bDAgMzkuM0wzMjYuNyAyOTNsOS4zIDYuNnpNNDggMTIwbDAtMjRMMCA5NmwwIDI0TDAgNDU2bDAgMjQgMjQgMCA0MzIgMCAyNCAwIDAtNDgtMjQgMEw0OCA0MzJsMC0zMTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Envelopes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 56.9c2.2 1.6 4.5 3.2 6.7 4.8C180.5 149.2 258.2 204.8 336 260.3c77.8-55.6 155.5-111.1 233.3-166.6c2.2-1.6 4.5-3.2 6.7-4.8L576 32 96 32zm0 96.2L96 384l480 0 0-255.8C499.1 183.2 422.2 238.1 345.3 293c-3.1 2.2-6.2 4.4-9.3 6.6c-3.1-2.2-6.2-4.4-9.3-6.6C249.8 238.1 172.9 183.2 96 128.2z" />
            <path d="M336 299.7l9.3-6.6L576 128.2l0-39.3-6.7 4.8L336 260.3 102.7 93.7 96 88.9l0 39.3L326.7 293l9.3 6.6zM48 120l0-24L0 96l0 24L0 456l0 24 24 0 432 0 24 0 0-48-24 0L48 432l0-312z" />
    </Icon>
);

export default Envelopes;