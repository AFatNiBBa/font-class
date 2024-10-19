
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `text-slash` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/text-slash?s=thin text-slash}
 * @preview ![text-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzYuOTgyIDQ5Ny43MzRMMzI4Ljg1NyAyNTIuODExVjI1Mi44MDlMMzE0Ljg5MiAyNDEuNzA3VjI0MS43MDlMMzI1LjQzMSAyNTAuMDg4TDEyLjk4OCAxLjczQzExLjUyNSAwLjU2NiA5Ljc3MSAwIDguMDI1IDBDNS42NzMgMCAzLjMzNSAxLjAyOSAxLjczOCAzLjAxMkMtMS4wMTIgNi40OCAtMC40MzQgMTEuNTEyIDMuMDE5IDE0LjI2Mkw2MjcuMDEzIDUxMC4yNjZDNjI4LjQ5NyA1MTEuNDM4IDYzMC4yNDcgNTEyIDYzMS45OTcgNTEyQzYzNC4zNDEgNTEyIDYzNi42ODUgNTEwLjk2OSA2MzguMjYzIDUwOC45ODRDNjQxLjAxMyA1MDUuNTE2IDY0MC40MzUgNTAwLjQ4NCA2MzYuOTgyIDQ5Ny43MzRaTTM1Mi4wMDEgNDY0SDI4My42MDlMMzEwLjE0NiAzNDAuMTQ2TDI5Ni4xNzcgMzI5LjA0M0wyNjcuMjYxIDQ2NEgxOTIuMDAxQzE4Ny41OTUgNDY0IDE4NC4wMDEgNDY3LjU5NCAxODQuMDAxIDQ3MlMxODcuNTk1IDQ4MCAxOTIuMDAxIDQ4MEgzNTIuMDAxQzM1Ni40MDggNDgwIDM2MC4wMDEgNDc2LjQwNiAzNjAuMDAxIDQ3MlMzNTYuNDA4IDQ2NCAzNTIuMDAxIDQ2NFpNMTYwLjAwMSA0OEgzNTYuMzk4TDMyOS44NjEgMTcxLjg1MkwzNDMuODI1IDE4Mi45NTFMMzcyLjc0IDQ4SDU1Mi4wMDFDNTU2LjQwOCA0OCA1NjAuMDAxIDUxLjU5NCA1NjAuMDAxIDU2VjEyMEM1NjAuMDAxIDEyNC40MjIgNTYzLjU5NSAxMjggNTY4LjAwMSAxMjhTNTc2LjAwMSAxMjQuNDIyIDU3Ni4wMDEgMTIwVjU2QzU3Ni4wMDEgNDIuNzY2IDU2NS4yMiAzMiA1NTIuMDAxIDMySDE2MC4wMDFDMTU1LjU5NSAzMiAxNTIuMDAxIDM1LjU3OCAxNTIuMDAxIDQwUzE1NS41OTUgNDggMTYwLjAwMSA0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TextSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M636.982 497.734L328.857 252.811V252.809L314.892 241.707V241.709L325.431 250.088L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.029 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.013 510.266C628.497 511.438 630.247 512 631.997 512C634.341 512 636.685 510.969 638.263 508.984C641.013 505.516 640.435 500.484 636.982 497.734ZM352.001 464H283.609L310.146 340.146L296.177 329.043L267.261 464H192.001C187.595 464 184.001 467.594 184.001 472S187.595 480 192.001 480H352.001C356.408 480 360.001 476.406 360.001 472S356.408 464 352.001 464ZM160.001 48H356.398L329.861 171.852L343.825 182.951L372.74 48H552.001C556.408 48 560.001 51.594 560.001 56V120C560.001 124.422 563.595 128 568.001 128S576.001 124.422 576.001 120V56C576.001 42.766 565.22 32 552.001 32H160.001C155.595 32 152.001 35.578 152.001 40S155.595 48 160.001 48Z" />
        </Icon>
    </>
}