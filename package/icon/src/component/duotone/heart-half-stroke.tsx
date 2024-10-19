
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart-half-stroke` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half-stroke?s=duotone heart-half-stroke}
 * @preview ![heart-half-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgOTZsMCA2Ny45IDAgMjIuNiA0NS4zLTQ1LjMgMTItMTJjMTgtMTggNDMuNi0yNi4yIDY4LjgtMjJjMzguMSA2LjMgNjYgMzkuMyA2NiA3Ny45bDAgNS44YzAgMjMuOC05LjkgNDYuNS0yNy4zIDYyLjdMMjU2IDQwNy40bDAgMjEuOSAwIDUwLjdjMTAuMyAwIDIwLjItMy45IDI3LjctMTAuOUw0NjQuNCAzMDAuNGMzMC40LTI4LjMgNDcuNi02OCA0Ny42LTEwOS41bDAtNS44YzAtNjkuOS01MC41LTEyOS41LTExOS40LTE0MUMzNDcgMzYuNSAzMDAuNiA1MS40IDI2OCA4NEwyNTYgOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgOTZMMjQ0IDg0czAgMCAwIDBjLTMyLjYtMzIuNi03OS00Ny41LTEyNC42LTM5LjlDNTAuNSA1NS42IDAgMTE1LjIgMCAxODUuMWwwIDUuOGMwIDQxLjUgMTcuMiA4MS4yIDQ3LjYgMTA5LjVMMjI4LjMgNDY5LjFjNy41IDcgMTcuNCAxMC45IDI3LjcgMTAuOWwwLTUwLjcgMC0yNjUuNEwyNTYgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const HeartHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 96l0 67.9 0 22.6 45.3-45.3 12-12c18-18 43.6-26.2 68.8-22c38.1 6.3 66 39.3 66 77.9l0 5.8c0 23.8-9.9 46.5-27.3 62.7L256 407.4l0 21.9 0 50.7c10.3 0 20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5l0-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96z" />
            <path d="M256 96L244 84s0 0 0 0c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1l0 5.8c0 41.5 17.2 81.2 47.6 109.5L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9l0-50.7 0-265.4L256 96z" />
    </Icon>
);

export default HeartHalfStroke;