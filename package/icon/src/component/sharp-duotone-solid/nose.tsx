
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nose` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nose?s=sharp-duotone-solid nose}
 * @preview ![nose](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQwMS45YzEgNjEgNTAuOCAxMTAuMSAxMTIgMTEwLjFjMC0xMC43IDAtMjEuMyAwLTMyYzAtMzUuMyAyOC43LTY0IDY0LTY0bDMyIDAgMTA4LjggOTYgMzUuMiAwIDk2IDAgMC0xNDRMMTc2IDAgNjQgMGwwIDI2OC4xYzEwLjctMy44IDIxLjktNi4zIDMzLjctNy41bDQ0LjctNC41IDE1LjktMS42IDMuMiAzMS44LTE1LjkgMS42LTQ0LjcgNC41QzQ0LjMgMjk4IDEgMzQ1LjMgMCA0MDEuOXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIwOCA0MTZIMTc2Yy0zNS4zIDAtNjQgMjguNy02NCA2NHYzMkgzMTYuOEwyMDggNDE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Nose: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 401.9c1 61 50.8 110.1 112 110.1c0-10.7 0-21.3 0-32c0-35.3 28.7-64 64-64l32 0 108.8 96 35.2 0 96 0 0-144L176 0 64 0l0 268.1c10.7-3.8 21.9-6.3 33.7-7.5l44.7-4.5 15.9-1.6 3.2 31.8-15.9 1.6-44.7 4.5C44.3 298 1 345.3 0 401.9z" />
            <path d="M208 416H176c-35.3 0-64 28.7-64 64v32H316.8L208 416z" />
    </Icon>
);

export default Nose;