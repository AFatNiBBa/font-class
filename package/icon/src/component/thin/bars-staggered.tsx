
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bars-staggered` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bars-staggered?s=thin bars-staggered}
 * @preview ![bars-staggered](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04IDEwNEg0NDBDNDQ0LjQyMiAxMDQgNDQ4IDEwMC40MDYgNDQ4IDk2UzQ0NC40MjIgODggNDQwIDg4SDhDMy41NzggODggMCA5MS41OTQgMCA5NlMzLjU3OCAxMDQgOCAxMDRaTTQ0MCA0MDhIOEMzLjU3OCA0MDggMCA0MTEuNTk0IDAgNDE2UzMuNTc4IDQyNCA4IDQyNEg0NDBDNDQ0LjQyMiA0MjQgNDQ4IDQyMC40MDYgNDQ4IDQxNlM0NDQuNDIyIDQwOCA0NDAgNDA4Wk01MDQgMjQ4SDcyQzY3LjU3OCAyNDggNjQgMjUxLjU5NCA2NCAyNTZTNjcuNTc4IDI2NCA3MiAyNjRINTA0QzUwOC40MjIgMjY0IDUxMiAyNjAuNDA2IDUxMiAyNTZTNTA4LjQyMiAyNDggNTA0IDI0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BarsStaggered(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M8 104H440C444.422 104 448 100.406 448 96S444.422 88 440 88H8C3.578 88 0 91.594 0 96S3.578 104 8 104ZM440 408H8C3.578 408 0 411.594 0 416S3.578 424 8 424H440C444.422 424 448 420.406 448 416S444.422 408 440 408ZM504 248H72C67.578 248 64 251.594 64 256S67.578 264 72 264H504C508.422 264 512 260.406 512 256S508.422 248 504 248Z" />
        </Icon>
    </>
}