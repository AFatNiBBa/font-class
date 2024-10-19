
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cloud-fog` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-fog?s=solid cloud-fog}
 * @preview ![cloud-fog](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgMzIwSDQ4MEM1MzMgMzIwIDU3NiAyNzcgNTc2IDIyNFM1MzMgMTI4IDQ4MCAxMjhDNDc5LjM3NSAxMjggNDc4Ljg3NSAxMjguMjUgNDc4LjM3NSAxMjguMjVDNDc5LjUgMTIzIDQ4MCAxMTcuNjI1IDQ4MCAxMTJDNDgwIDY3Ljc1IDQ0NC4yNSAzMiA0MDAgMzJDMzc1LjM3NSAzMiAzNTMuNzUgNDMuMjUgMzM5IDYwLjc1QzMyMC4zNzUgMjQuNzUgMjgzLjI1IDAgMjQwIDBDMTc4LjEyNSAwIDEyOCA1MC4xMjUgMTI4IDExMkMxMjggMTE5LjI1IDEyOC43NSAxMjYuMjUgMTMwLjEyNSAxMzMuMjVDOTEuNzUgMTQ1Ljc1IDY0IDE4MS41IDY0IDIyNEM2NCAyNzcgMTA3IDMyMCAxNjAgMzIwWk0yMDAgNDY0SDg4Qzc0LjggNDY0IDY0IDQ3NC44IDY0IDQ4OFY0ODhDNjQgNTAxLjIgNzQuOCA1MTIgODggNTEySDIwMEMyMTMuMiA1MTIgMjI0IDUwMS4yIDIyNCA0ODhWNDg4QzIyNCA0NzQuOCAyMTMuMiA0NjQgMjAwIDQ2NFpNNjE2IDQ2NEgyOTZDMjgyLjggNDY0IDI3MiA0NzQuOCAyNzIgNDg4VjQ4OEMyNzIgNTAxLjIgMjgyLjggNTEyIDI5NiA1MTJINjE2QzYyOS4yIDUxMiA2NDAgNTAxLjIgNjQwIDQ4OFY0ODhDNjQwIDQ3NC44IDYyOS4yIDQ2NCA2MTYgNDY0Wk01NzYgNDAwVjQwMEM1NzYgMzg2LjggNTY1LjIgMzc2IDU1MiAzNzZIMjRDMTAuOCAzNzYgMCAzODYuOCAwIDQwMFY0MDBDMCA0MTMuMiAxMC44IDQyNCAyNCA0MjRINTUyQzU2NS4yIDQyNCA1NzYgNDEzLjIgNTc2IDQwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CloudFog(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M160 320H480C533 320 576 277 576 224S533 128 480 128C479.375 128 478.875 128.25 478.375 128.25C479.5 123 480 117.625 480 112C480 67.75 444.25 32 400 32C375.375 32 353.75 43.25 339 60.75C320.375 24.75 283.25 0 240 0C178.125 0 128 50.125 128 112C128 119.25 128.75 126.25 130.125 133.25C91.75 145.75 64 181.5 64 224C64 277 107 320 160 320ZM200 464H88C74.8 464 64 474.8 64 488V488C64 501.2 74.8 512 88 512H200C213.2 512 224 501.2 224 488V488C224 474.8 213.2 464 200 464ZM616 464H296C282.8 464 272 474.8 272 488V488C272 501.2 282.8 512 296 512H616C629.2 512 640 501.2 640 488V488C640 474.8 629.2 464 616 464ZM576 400V400C576 386.8 565.2 376 552 376H24C10.8 376 0 386.8 0 400V400C0 413.2 10.8 424 24 424H552C565.2 424 576 413.2 576 400Z" />
        </Icon>
    </>
}