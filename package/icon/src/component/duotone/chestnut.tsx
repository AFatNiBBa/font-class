
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chestnut` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chestnut?s=duotone chestnut}
 * @preview ![chestnut](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00IDM4NEw0NDQgMzg0Yy0xNC4yIDU1LjItNjQuMyA5Ni0xMjQgOTZsLTE5MiAwQzY4LjQgNDgwIDE4LjIgNDM5LjIgNCAzODR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgMzJjNS4zIDAgMTAuMyAyLjcgMTMuMyA3LjFjMi45IDQuMyA3LjkgOS43IDE1LjUgMTYuNmM3LjUgNi44IDE2LjcgMTQuMyAyNy4yIDIyLjhsMy4xIDIuNXMwIDAgMCAwYzIwLjMgMTYuNCA0NC43IDM2LjEgNjguMiA1OS42QzQwMC44IDE5MC4yIDQ0OCAyNTggNDQ4IDM1MmMwIDExLTEuNCAyMS44LTQgMzJMNCAzODRjLTIuNi0xMC4yLTQtMjEtNC0zMmMwLTk0IDQ3LjItMTYxLjggOTYuNy0yMTEuM2MyMy41LTIzLjUgNDcuOS00My4yIDY4LjItNTkuNmwzLjEtMi41YzEwLjYtOC41IDE5LjctMTYgMjcuMi0yMi44YzcuNi02LjkgMTIuNy0xMi4zIDE1LjUtMTYuNmMzLTQuNSA4LTcuMSAxMy4zLTcuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const Chestnut: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M4 384L444 384c-14.2 55.2-64.3 96-124 96l-192 0C68.4 480 18.2 439.2 4 384z" />
            <path d="M224 32c5.3 0 10.3 2.7 13.3 7.1c2.9 4.3 7.9 9.7 15.5 16.6c7.5 6.8 16.7 14.3 27.2 22.8l3.1 2.5s0 0 0 0c20.3 16.4 44.7 36.1 68.2 59.6C400.8 190.2 448 258 448 352c0 11-1.4 21.8-4 32L4 384c-2.6-10.2-4-21-4-32c0-94 47.2-161.8 96.7-211.3c23.5-23.5 47.9-43.2 68.2-59.6l3.1-2.5c10.6-8.5 19.7-16 27.2-22.8c7.6-6.9 12.7-12.3 15.5-16.6c3-4.5 8-7.1 13.3-7.1z" />
    </Icon>
);

export default Chestnut;