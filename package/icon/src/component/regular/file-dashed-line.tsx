
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-dashed-line` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-dashed-line?s=regular file-dashed-line}
 * @preview ![file-dashed-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgMjg4QzE2MCAyNzQuNzUgMTQ5LjI1IDI2NCAxMzYgMjY0SDI0QzEwLjc1IDI2NCAwIDI3NC43NSAwIDI4OFMxMC43NSAzMTIgMjQgMzEySDEzNkMxNDkuMjUgMzEyIDE2MCAzMDEuMjUgMTYwIDI4OFpNNTUyIDI2NEg0NDBDNDI2Ljc1IDI2NCA0MTYgMjc0Ljc1IDQxNiAyODhTNDI2Ljc1IDMxMiA0NDAgMzEySDU1MkM1NjUuMjUgMzEyIDU3NiAzMDEuMjUgNTc2IDI4OFM1NjUuMjUgMjY0IDU1MiAyNjRaTTI0OCAyNjRDMjM0Ljc1IDI2NCAyMjQgMjc0Ljc1IDIyNCAyODhTMjM0Ljc1IDMxMiAyNDggMzEySDMyOEMzNDEuMjUgMzEyIDM1MiAzMDEuMjUgMzUyIDI4OFMzNDEuMjUgMjY0IDMyOCAyNjRIMjQ4Wk0xNDQuMDA4IDIyNEwxNDQgNjQuMTI1QzE0NCA1NS4yODkgMTUxLjE2NCA0OC4xMjUgMTYwIDQ4LjEyNUgzMjAuMDA4VjEyOEMzMjAuMDA4IDE0NS42NzIgMzM0LjMzNCAxNjAgMzUyLjAwOCAxNjBINDMyLjAwMlYyMjRINDgwVjEzOC42NDFDNDgwIDEyMS42NjQgNDczLjI1OCAxMDUuMzgzIDQ2MS4yNTYgOTMuMzgzTDM4Ni42MjcgMTguNzQ2QzM3NC42MjUgNi43NDIgMzU4LjM0OCAwIDM0MS4zNzMgMEgxNjBDMTI0LjY1NCAwIDk2IDI4LjY1MiA5NiA2NEw5Ni4wMDggMjI0SDE0NC4wMDhaTTQzMi4wMDIgNDQ4QzQzMi4wMDIgNDU2LjgzNiA0MjQuODM4IDQ2NCA0MTYuMDAyIDQ2NEgxNjAuMDE4QzE1MS4xOCA0NjQgMTQ0LjAxOCA0NTYuODM2IDE0NC4wMTggNDQ4TDE0NC4wMTQgMzUySDk2LjAxNkw5Ni4wMiA0NDhDOTYuMDIgNDgzLjM0NCAxMjQuNjc0IDUxMiAxNjAuMDIgNTEySDQxNkM0NTEuMTk5IDUxMiA0ODAgNDgzLjE5OSA0ODAgNDQ4VjM1Mkg0MzIuMDAyVjQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FileDashedLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M160 288C160 274.75 149.25 264 136 264H24C10.75 264 0 274.75 0 288S10.75 312 24 312H136C149.25 312 160 301.25 160 288ZM552 264H440C426.75 264 416 274.75 416 288S426.75 312 440 312H552C565.25 312 576 301.25 576 288S565.25 264 552 264ZM248 264C234.75 264 224 274.75 224 288S234.75 312 248 312H328C341.25 312 352 301.25 352 288S341.25 264 328 264H248ZM144.008 224L144 64.125C144 55.289 151.164 48.125 160 48.125H320.008V128C320.008 145.672 334.334 160 352.008 160H432.002V224H480V138.641C480 121.664 473.258 105.383 461.256 93.383L386.627 18.746C374.625 6.742 358.348 0 341.373 0H160C124.654 0 96 28.652 96 64L96.008 224H144.008ZM432.002 448C432.002 456.836 424.838 464 416.002 464H160.018C151.18 464 144.018 456.836 144.018 448L144.014 352H96.016L96.02 448C96.02 483.344 124.674 512 160.02 512H416C451.199 512 480 483.199 480 448V352H432.002V448Z" />
        </Icon>
    </>
}