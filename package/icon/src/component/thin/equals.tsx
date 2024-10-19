
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `equals` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/equals?s=thin equals}
 * @preview ![equals](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04IDE2OEg0NDBDNDQ0LjQyMiAxNjggNDQ4IDE2NC40MDYgNDQ4IDE2MFM0NDQuNDIyIDE1MiA0NDAgMTUySDhDMy41NzggMTUyIDAgMTU1LjU5NCAwIDE2MFMzLjU3OCAxNjggOCAxNjhaTTQ0MCAzNDRIOEMzLjU3OCAzNDQgMCAzNDcuNTk0IDAgMzUyUzMuNTc4IDM2MCA4IDM2MEg0NDBDNDQ0LjQyMiAzNjAgNDQ4IDM1Ni40MDYgNDQ4IDM1MlM0NDQuNDIyIDM0NCA0NDAgMzQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Equals(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M8 168H440C444.422 168 448 164.406 448 160S444.422 152 440 152H8C3.578 152 0 155.594 0 160S3.578 168 8 168ZM440 344H8C3.578 344 0 347.594 0 352S3.578 360 8 360H440C444.422 360 448 356.406 448 352S444.422 344 440 344Z" />
        </Icon>
    </>
}