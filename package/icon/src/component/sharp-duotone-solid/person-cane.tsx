
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-cane` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-cane?s=sharp-duotone-solid person-cane}
 * @preview ![person-cane](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMDQgMzc2bDAgOCAwIDI0IDQ4IDAgMC0yNCAwLThjMC00LjQgMy42LTggOC04czggMy42IDggOGwwIDExMiAwIDI0IDQ4IDAgMC0yNCAwLTExMmMwLTMwLjktMjUuMS01Ni01Ni01NnMtNTYgMjUuMS01NiA1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE3NiA0OGE0OCA0OCAwIDEgMSA5NiAwIDQ4IDQ4IDAgMSAxIC05NiAwek0xMjAgMjU2LjlMOTEuNCAzMDQuNSA3NC45IDMzMS45bC01NC45LTMzIDE2LjUtMjcuNCA3Ni45LTEyOCA5LjMtMTUuNSAxOC4xIDAgMTAyLjIgMCAxNSAwIDkuNiAxMS42IDkyLjkgMTEyIDIwLjQgMjQuNi00OS4zIDQwLjktMjAuNC0yNC42TDI2NCAyMzUuMyAyNjQgNDgwbDAgMzItNjQgMCAwLTMyIDAtMTI4LTE2IDAgMCAxMjggMCAzMi02NCAwIDAtMzIgMC0yMjMuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const PersonCane: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M304 376l0 8 0 24 48 0 0-24 0-8c0-4.4 3.6-8 8-8s8 3.6 8 8l0 112 0 24 48 0 0-24 0-112c0-30.9-25.1-56-56-56s-56 25.1-56 56z" />
            <path d="M176 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM120 256.9L91.4 304.5 74.9 331.9l-54.9-33 16.5-27.4 76.9-128 9.3-15.5 18.1 0 102.2 0 15 0 9.6 11.6 92.9 112 20.4 24.6-49.3 40.9-20.4-24.6L264 235.3 264 480l0 32-64 0 0-32 0-128-16 0 0 128 0 32-64 0 0-32 0-223.1z" />
    </Icon>
);

export default PersonCane;