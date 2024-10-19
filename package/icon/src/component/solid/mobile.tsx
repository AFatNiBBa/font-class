
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `mobile` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mobile?s=solid mobile}
 * @preview ![mobile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMEg2NEMzNy41IDAgMTYgMjEuNSAxNiA0OFY0NjRDMTYgNDkwLjUgMzcuNSA1MTIgNjQgNTEySDMyMEMzNDYuNSA1MTIgMzY4IDQ5MC41IDM2OCA0NjRWNDhDMzY4IDIxLjUgMzQ2LjUgMCAzMjAgMFpNMjQwIDQ0OEMyNDAgNDU2LjgzNyAyMzIuODM3IDQ2NCAyMjQgNDY0SDE2MEMxNTEuMTYzIDQ2NCAxNDQgNDU2LjgzNyAxNDQgNDQ4VjQ0OEMxNDQgNDM5LjE2MyAxNTEuMTYzIDQzMiAxNjAgNDMySDIyNEMyMzIuODM3IDQzMiAyNDAgNDM5LjE2MyAyNDAgNDQ4VjQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Mobile(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M320 0H64C37.5 0 16 21.5 16 48V464C16 490.5 37.5 512 64 512H320C346.5 512 368 490.5 368 464V48C368 21.5 346.5 0 320 0ZM240 448C240 456.837 232.837 464 224 464H160C151.163 464 144 456.837 144 448V448C144 439.163 151.163 432 160 432H224C232.837 432 240 439.163 240 448V448Z" />
        </Icon>
    </>
}