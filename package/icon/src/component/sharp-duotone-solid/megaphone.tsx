
import { Icon, generic } from "../../index";

/**
 * A component that renders the `megaphone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/megaphone?s=sharp-duotone-solid megaphone}
 * @preview ![megaphone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGwwIDMyTDAgMzIwbDAgMzIgNjQgMCAwLTMwLjljMzQuMSA5LjcgNjguMSAxOS4zIDEwMi4yIDI5YzE1LjUgNC40IDMxIDguOCA0Ni41IDEzLjJjMzAuMyA4LjYgNjAuNyAxNy4yIDkxIDI1LjhjMTUuNSA0LjQgMzEgOC44IDQ2LjUgMTMuMkw1MTIgNDQ4bDAtMzg0TDY0IDE5MC45IDY0IDE2MCAwIDE2MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTU3NiAzMmwtNjQgMCAwIDQ0OCA2NCAwIDAtNDQ4ek0xNjAgMzg0YzAgNTMgNDMgOTYgOTYgOTZjNDYuOCAwIDg1LjgtMzMuNSA5NC4zLTc3LjhMMzAzLjcgMzg5Yy0yLjUgMjQuMi0yMi45IDQzLTQ3LjcgNDNjLTI2LjUgMC00OC0yMS41LTQ4LTQ4YzAtNy40IDEuNy0xNC41IDQuNy0yMC44TDE2Ni4yIDM1MGMtNCAxMC42LTYuMiAyMi02LjIgMzR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Megaphone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l0 32L0 320l0 32 64 0 0-30.9c34.1 9.7 68.1 19.3 102.2 29c15.5 4.4 31 8.8 46.5 13.2c30.3 8.6 60.7 17.2 91 25.8c15.5 4.4 31 8.8 46.5 13.2L512 448l0-384L64 190.9 64 160 0 160z" />
            <path d="M576 32l-64 0 0 448 64 0 0-448zM160 384c0 53 43 96 96 96c46.8 0 85.8-33.5 94.3-77.8L303.7 389c-2.5 24.2-22.9 43-47.7 43c-26.5 0-48-21.5-48-48c0-7.4 1.7-14.5 4.7-20.8L166.2 350c-4 10.6-6.2 22-6.2 34z" />
    </Icon>
);

export default Megaphone;