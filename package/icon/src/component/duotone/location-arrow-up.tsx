
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-arrow-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow-up?s=duotone location-arrow-up}
 * @preview ![location-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zNi42IDQzMkwyMDEuNyA0Ni43QzIwNS41IDM3LjggMjE0LjMgMzIgMjI0IDMyczE4LjUgNS44IDIyLjMgMTQuN0w0MTEuNCA0MzJjOS43IDIyLjctNi45IDQ4LTMxLjYgNDhjLTcuNyAwLTE1LjEtMi42LTIxLjEtNy4yTDIyNCAzNjggODkuMyA0NzIuOGMtNiA0LjctMTMuNSA3LjItMjEuMSA3LjJjLTI0LjcgMC00MS40LTI1LjMtMzEuNi00OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const LocationArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M36.6 432L201.7 46.7C205.5 37.8 214.3 32 224 32s18.5 5.8 22.3 14.7L411.4 432c9.7 22.7-6.9 48-31.6 48c-7.7 0-15.1-2.6-21.1-7.2L224 368 89.3 472.8c-6 4.7-13.5 7.2-21.1 7.2c-24.7 0-41.4-25.3-31.6-48z" />
    </Icon>
);

export default LocationArrowUp;