
import { Icon, generic } from "../../index";

/**
 * A component that renders the `acorn` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/acorn?s=duotone acorn}
 * @preview ![acorn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OCAxOTJsMCAzMmMwIDc4LjEgMzAuNSAyMDEuOSAxNjUuOSAyNTIuNGMzLjIgMS4yIDYuNyAxLjggMTAuMSAxLjhzNi45LS42IDEwLjEtMS44QzM2OS41IDQyNS45IDQwMCAzMDIuMSA0MDAgMjI0bDAtMzJMNDggMTkyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjY3LjIgMzguNGM4LTEwLjYgNS44LTI1LjYtNC44LTMzLjZzLTI1LjYtNS44LTMzLjYgNC44TDIyNCAxNmMtMTAuNyAxNC4zLTE4IDMwLjctMjEuNiA0OEw5NiA2NEM0MyA2NCAwIDEwNyAwIDE2MGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwzODQgMGMxNy43IDAgMzItMTQuMyAzMi0zMmMwLTUzLTQzLTk2LTk2LTk2bC05OS45IDBjMi40LTYuOCA1LjktMTMuMyAxMC4zLTE5LjJsNC44LTYuNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Acorn: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 192l0 32c0 78.1 30.5 201.9 165.9 252.4c3.2 1.2 6.7 1.8 10.1 1.8s6.9-.6 10.1-1.8C369.5 425.9 400 302.1 400 224l0-32L48 192z" />
            <path d="M267.2 38.4c8-10.6 5.8-25.6-4.8-33.6s-25.6-5.8-33.6 4.8L224 16c-10.7 14.3-18 30.7-21.6 48L96 64C43 64 0 107 0 160c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32c0-53-43-96-96-96l-99.9 0c2.4-6.8 5.9-13.3 10.3-19.2l4.8-6.4z" />
    </Icon>
);

export default Acorn;