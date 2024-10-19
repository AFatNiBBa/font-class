
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow?s=light location-arrow}
 * @preview ![location-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDIyNEw0OCAyMjQgNDAwIDgwIDI1NiA0MzJsMC0xNzZjMC0xNy43LTE0LjMtMzItMzItMzJ6bS0zMiAzMmwzMiAwIDAgMzIgMCAxNDRjMCAxNS4zIDEwLjggMjguNCAyNS44IDMxLjRzMzAtNS4xIDM1LjgtMTkuM2wxNDQtMzUyYzQuOS0xMS45IDIuMS0yNS42LTctMzQuN3MtMjIuOC0xMS45LTM0LjctN2wtMzUyIDE0NGMtMTQuMiA1LjgtMjIuMiAyMC44LTE5LjMgMzUuOHMxNi4xIDI1LjggMzEuNCAyNS44bDE0NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LocationArrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 224L48 224 400 80 256 432l0-176c0-17.7-14.3-32-32-32zm-32 32l32 0 0 32 0 144c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l144 0z" />
    </Icon>
);

export default LocationArrow;