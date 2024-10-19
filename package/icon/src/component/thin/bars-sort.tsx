
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bars-sort` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bars-sort?s=thin bars-sort}
 * @preview ![bars-sort](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04IDEwNEg0NDBDNDQ0LjQwNiAxMDQgNDQ4IDEwMC40MDYgNDQ4IDk2UzQ0NC40MDYgODggNDQwIDg4SDhDMy41OTQgODggMCA5MS41OTQgMCA5NlMzLjU5NCAxMDQgOCAxMDRaTTMxMiAyNDhIOEMzLjU5NCAyNDggMCAyNTEuNTk0IDAgMjU2UzMuNTk0IDI2NCA4IDI2NEgzMTJDMzE2LjQwNiAyNjQgMzIwIDI2MC40MDYgMzIwIDI1NlMzMTYuNDA2IDI0OCAzMTIgMjQ4Wk0xODQgNDA4SDhDMy41OTQgNDA4IDAgNDExLjU5NCAwIDQxNlMzLjU5NCA0MjQgOCA0MjRIMTg0QzE4OC40MDYgNDI0IDE5MiA0MjAuNDA2IDE5MiA0MTZTMTg4LjQwNiA0MDggMTg0IDQwOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BarsSort(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M8 104H440C444.406 104 448 100.406 448 96S444.406 88 440 88H8C3.594 88 0 91.594 0 96S3.594 104 8 104ZM312 248H8C3.594 248 0 251.594 0 256S3.594 264 8 264H312C316.406 264 320 260.406 320 256S316.406 248 312 248ZM184 408H8C3.594 408 0 411.594 0 416S3.594 424 8 424H184C188.406 424 192 420.406 192 416S188.406 408 184 408Z" />
        </Icon>
    </>
}