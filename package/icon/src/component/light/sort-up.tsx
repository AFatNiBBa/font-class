
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sort-up` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sort-up?s=light sort-up}
 * @preview ![sort-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMi4wNDYgMjI0SDI4Ny45NTRDMzE2LjMxOCAyMjQgMzMwLjY4OCAxODkuNSAzMTAuNTcxIDE2OS4zNzVMMTgyLjYxNyA0MS4zNzVDMTcwLjEyMSAyOC44NzUgMTQ5Ljc1NCAyOC44NzUgMTM3LjI1OCA0MS4zNzVMOS4zMDQgMTY5LjM3NUMtMTAuNjg4IDE4OS41IDMuNjgyIDIyNCAzMi4wNDYgMjI0Wk0xNjAgNjRMMjg3Ljk1NCAxOTJIMzIuMDQ2TDE2MCA2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SortUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M32.046 224H287.954C316.318 224 330.688 189.5 310.571 169.375L182.617 41.375C170.121 28.875 149.754 28.875 137.258 41.375L9.304 169.375C-10.688 189.5 3.682 224 32.046 224ZM160 64L287.954 192H32.046L160 64Z" />
        </Icon>
    </>
}