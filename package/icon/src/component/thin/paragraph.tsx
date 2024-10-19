
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `paragraph` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/paragraph?s=thin paragraph}
 * @preview ![paragraph](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDAgMzJIMTc2Qzk2LjU5NCAzMiAzMiA5Ni41OTQgMzIgMTc2Uzk2LjU5NCAzMjAgMTc2IDMyMEgyNDhWNDcyQzI0OCA0NzYuNDIyIDI1MS41NzggNDgwIDI1NiA0ODBTMjY0IDQ3Ni40MjIgMjY0IDQ3MlY0OEgzNDRWNDcyQzM0NCA0NzYuNDIyIDM0Ny41NzggNDgwIDM1MiA0ODBTMzYwIDQ3Ni40MjIgMzYwIDQ3MlY0OEg0NDBDNDQ0LjQyMiA0OCA0NDggNDQuNDIyIDQ0OCA0MFM0NDQuNDIyIDMyIDQ0MCAzMlpNMjQ4IDMwNEgxNzZDMTA1LjQyMiAzMDQgNDggMjQ2LjU3OCA0OCAxNzZTMTA1LjQyMiA0OCAxNzYgNDhIMjQ4VjMwNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Paragraph(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M440 32H176C96.594 32 32 96.594 32 176S96.594 320 176 320H248V472C248 476.422 251.578 480 256 480S264 476.422 264 472V48H344V472C344 476.422 347.578 480 352 480S360 476.422 360 472V48H440C444.422 48 448 44.422 448 40S444.422 32 440 32ZM248 304H176C105.422 304 48 246.578 48 176S105.422 48 176 48H248V304Z" />
        </Icon>
    </>
}