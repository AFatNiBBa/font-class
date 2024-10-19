
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-arrow` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow?s=duotone location-arrow}
 * @preview ![location-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00MjkuNiA5Mi4xYzQuOS0xMS45IDIuMS0yNS42LTctMzQuN3MtMjIuOC0xMS45LTM0LjctN2wtMzUyIDE0NGMtMTQuMiA1LjgtMjIuMiAyMC44LTE5LjMgMzUuOHMxNi4xIDI1LjggMzEuNCAyNS44bDE3NiAwIDAgMTc2YzAgMTUuMyAxMC44IDI4LjQgMjUuOCAzMS40czMwLTUuMSAzNS44LTE5LjNsMTQ0LTM1MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const LocationArrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l176 0 0 176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
    </Icon>
);

export default LocationArrow;