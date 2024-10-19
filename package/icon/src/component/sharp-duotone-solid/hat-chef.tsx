
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hat-chef` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-chef?s=sharp-duotone-solid hat-chef}
 * @preview ![hat-chef](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyNy4yYzAgMTEuMSAxLjkgMjIuMSA1LjcgMzIuNUw2NCAzMjBsNzQuMiAwLTI2LTE0OS4zTDEwOS41IDE1NWwzMS41LTUuNSAyLjcgMTUuOEwxNzAuNyAzMjBsNjkuMyAwIDAtMTYwIDAtMTYgMzIgMCAwIDE2IDAgMTYwIDY5LjMgMCAyNi45LTE1NC43IDIuNy0xNS44IDMxLjUgNS41LTIuNyAxNS44TDM3My44IDMyMGw3NC4yIDAgNTguMy0xNjAuMmMzLjgtMTAuNCA1LjctMjEuNCA1LjctMzIuNUM1MTIgNzQuNiA0NjkgMzIgNDE2LjQgMzJjLTIxLjcgMC00MS44IDcuMi01Ny45IDE5LjNDMzM1LjEgMjAuMiAyOTcuOSAwIDI1NiAwcy03OS4xIDIwLjItMTAyLjUgNTEuM0MxMzcuNCAzOS4yIDExNy4zIDMyIDk1LjYgMzJDNDMgMzIgMCA3NC42IDAgMTI3LjJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCAzMjBINDQ4VjUxMkg2NFYzMjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const HatChef: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 127.2c0 11.1 1.9 22.1 5.7 32.5L64 320l74.2 0-26-149.3L109.5 155l31.5-5.5 2.7 15.8L170.7 320l69.3 0 0-160 0-16 32 0 0 16 0 160 69.3 0 26.9-154.7 2.7-15.8 31.5 5.5-2.7 15.8L373.8 320l74.2 0 58.3-160.2c3.8-10.4 5.7-21.4 5.7-32.5C512 74.6 469 32 416.4 32c-21.7 0-41.8 7.2-57.9 19.3C335.1 20.2 297.9 0 256 0s-79.1 20.2-102.5 51.3C137.4 39.2 117.3 32 95.6 32C43 32 0 74.6 0 127.2z" />
            <path d="M64 320H448V512H64V320z" />
    </Icon>
);

export default HatChef;