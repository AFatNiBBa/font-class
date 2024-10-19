
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-hail` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-hail?s=thin cloud-hail}
 * @preview ![cloud-hail](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzUyQzM2Ni4yNSAzNTIgMzUyIDM2Ni4yNSAzNTIgMzg0UzM2Ni4yNSA0MTYgMzg0IDQxNlM0MTYgNDAxLjc1IDQxNiAzODRTNDAxLjc1IDM1MiAzODQgMzUyWk0zODQgNDAwQzM3NS4wMjcgNDAwIDM2OCAzOTIuOTcxIDM2OCAzODRDMzY4IDM3NS4wMjcgMzc1LjAyNyAzNjggMzg0IDM2OFM0MDAgMzc1LjAyNyA0MDAgMzg0QzQwMCAzOTIuOTcxIDM5Mi45NzMgNDAwIDM4NCA0MDBaTTE5MiA0NDhDMTc0LjI1IDQ0OCAxNjAgNDYyLjI1IDE2MCA0ODBTMTc0LjI1IDUxMiAxOTIgNTEyUzIyNCA0OTcuNzUgMjI0IDQ4MFMyMDkuNzUgNDQ4IDE5MiA0NDhaTTE5MiA0OTZDMTgzLjAyNyA0OTYgMTc2IDQ4OC45NzEgMTc2IDQ4MEMxNzYgNDcxLjAyNyAxODMuMDI3IDQ2NCAxOTIgNDY0UzIwOCA0NzEuMDI3IDIwOCA0ODBDMjA4IDQ4OC45NzEgMjAwLjk3MyA0OTYgMTkyIDQ5NlpNMzIwIDQ0OEMzMDIuMjUgNDQ4IDI4OCA0NjIuMjUgMjg4IDQ4MFMzMDIuMjUgNTEyIDMyMCA1MTJTMzUyIDQ5Ny43NSAzNTIgNDgwUzMzNy43NSA0NDggMzIwIDQ0OFpNMzIwIDQ5NkMzMTEuMDI3IDQ5NiAzMDQgNDg4Ljk3MSAzMDQgNDgwQzMwNCA0NzEuMDI3IDMxMS4wMjcgNDY0IDMyMCA0NjRTMzM2IDQ3MS4wMjcgMzM2IDQ4MEMzMzYgNDg4Ljk3MSAzMjguOTczIDQ5NiAzMjAgNDk2Wk0yNTYgMzUyQzIzOC4yNSAzNTIgMjI0IDM2Ni4yNSAyMjQgMzg0UzIzOC4yNSA0MTYgMjU2IDQxNlMyODggNDAxLjc1IDI4OCAzODRTMjczLjc1IDM1MiAyNTYgMzUyWk0yNTYgNDAwQzI0Ny4wMjcgNDAwIDI0MCAzOTIuOTcxIDI0MCAzODRDMjQwIDM3NS4wMjcgMjQ3LjAyNyAzNjggMjU2IDM2OFMyNzIgMzc1LjAyNyAyNzIgMzg0QzI3MiAzOTIuOTcxIDI2NC45NzMgNDAwIDI1NiA0MDBaTTY0IDQ0OEM0Ni4yNSA0NDggMzIgNDYyLjI1IDMyIDQ4MFM0Ni4yNSA1MTIgNjQgNTEyUzk2IDQ5Ny43NSA5NiA0ODBTODEuNzUgNDQ4IDY0IDQ0OFpNNjQgNDk2QzU1LjAyNyA0OTYgNDggNDg4Ljk3MSA0OCA0ODBDNDggNDcxLjAyNyA1NS4wMjcgNDY0IDY0IDQ2NFM4MCA0NzEuMDI3IDgwIDQ4MEM4MCA0ODguOTcxIDcyLjk3MyA0OTYgNjQgNDk2Wk0xMjggMzUyQzExMC4yNSAzNTIgOTYgMzY2LjI1IDk2IDM4NFMxMTAuMjUgNDE2IDEyOCA0MTZTMTYwIDQwMS43NSAxNjAgMzg0UzE0NS43NSAzNTIgMTI4IDM1MlpNMTI4IDQwMEMxMTkuMDI3IDQwMCAxMTIgMzkyLjk3MSAxMTIgMzg0QzExMiAzNzUuMDI3IDExOS4wMjcgMzY4IDEyOCAzNjhTMTQ0IDM3NS4wMjcgMTQ0IDM4NEMxNDQgMzkyLjk3MSAxMzYuOTczIDQwMCAxMjggNDAwWk00MTYgMTI4QzQxNS4zNzUgMTI4IDQxNC44NzUgMTI4LjI1IDQxNC4zNzUgMTI4LjI1QzQxNS41IDEyMyA0MTYgMTE3LjYyNSA0MTYgMTEyQzQxNiA2Ny43NSAzODAuMjUgMzIgMzM2IDMyQzMxMS4zNzUgMzIgMjg5Ljc1IDQzLjI1IDI3NSA2MC43NUMyNTYuMzc1IDI0Ljc1IDIxOS4yNSAwIDE3NiAwQzExNC4xMjUgMCA2NCA1MC4xMjUgNjQgMTEyQzY0IDExOS4yNSA2NC43NSAxMjYuMjUgNjYuMTI1IDEzMy4yNUMyNy43NSAxNDUuNzUgMCAxODEuNSAwIDIyNEMwIDI3NyA0MyAzMjAgOTYgMzIwSDQxNkM0NjkgMzIwIDUxMiAyNzcgNTEyIDIyNFM0NjkgMTI4IDQxNiAxMjhaTTQxNiAzMDRIOTZDNTEuODg5IDMwNCAxNiAyNjguMTExIDE2IDIyNEMxNiAxODkuNTUxIDM4LjEzNSAxNTkuMTkzIDcxLjA4IDE0OC40NjNMODQuNTU3IDE0NC4wNzJMODEuODI0IDEzMC4xNjZDODAuNTk4IDEyMy45MTQgODAgMTE3Ljk3MSA4MCAxMTJDODAgNTkuMDY0IDEyMy4wNjQgMTYgMTc2IDE2QzIxMS42NzQgMTYgMjQ0LjE2MiAzNS45NjUgMjYwLjc4OSA2OC4xMDJMMjcxLjc5NyA4OS4zNzdMMjg3LjIzNCA3MS4wNjFDMjk5Ljc3IDU2LjE4OSAzMTcuMDg4IDQ4IDMzNiA0OEMzNzEuMjg5IDQ4IDQwMCA3Ni43MDkgNDAwIDExMkM0MDAgMTE2LjY5MSAzOTkuNTg0IDEyMC45MSAzOTguNzMgMTI0Ljg5NkwzOTQuNTgyIDE0NC4yNUg0MTQuMzc1QzQxNS40NzkgMTQ0LjI1IDQxNi40NDMgMTQ0LjE0NiA0MTcuMjc3IDE0NC4wMUM0NjAuODAxIDE0NC42OTcgNDk2IDE4MC4zMTYgNDk2IDIyNEM0OTYgMjY4LjExMSA0NjAuMTExIDMwNCA0MTYgMzA0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CloudHail(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M384 352C366.25 352 352 366.25 352 384S366.25 416 384 416S416 401.75 416 384S401.75 352 384 352ZM384 400C375.027 400 368 392.971 368 384C368 375.027 375.027 368 384 368S400 375.027 400 384C400 392.971 392.973 400 384 400ZM192 448C174.25 448 160 462.25 160 480S174.25 512 192 512S224 497.75 224 480S209.75 448 192 448ZM192 496C183.027 496 176 488.971 176 480C176 471.027 183.027 464 192 464S208 471.027 208 480C208 488.971 200.973 496 192 496ZM320 448C302.25 448 288 462.25 288 480S302.25 512 320 512S352 497.75 352 480S337.75 448 320 448ZM320 496C311.027 496 304 488.971 304 480C304 471.027 311.027 464 320 464S336 471.027 336 480C336 488.971 328.973 496 320 496ZM256 352C238.25 352 224 366.25 224 384S238.25 416 256 416S288 401.75 288 384S273.75 352 256 352ZM256 400C247.027 400 240 392.971 240 384C240 375.027 247.027 368 256 368S272 375.027 272 384C272 392.971 264.973 400 256 400ZM64 448C46.25 448 32 462.25 32 480S46.25 512 64 512S96 497.75 96 480S81.75 448 64 448ZM64 496C55.027 496 48 488.971 48 480C48 471.027 55.027 464 64 464S80 471.027 80 480C80 488.971 72.973 496 64 496ZM128 352C110.25 352 96 366.25 96 384S110.25 416 128 416S160 401.75 160 384S145.75 352 128 352ZM128 400C119.027 400 112 392.971 112 384C112 375.027 119.027 368 128 368S144 375.027 144 384C144 392.971 136.973 400 128 400ZM416 128C415.375 128 414.875 128.25 414.375 128.25C415.5 123 416 117.625 416 112C416 67.75 380.25 32 336 32C311.375 32 289.75 43.25 275 60.75C256.375 24.75 219.25 0 176 0C114.125 0 64 50.125 64 112C64 119.25 64.75 126.25 66.125 133.25C27.75 145.75 0 181.5 0 224C0 277 43 320 96 320H416C469 320 512 277 512 224S469 128 416 128ZM416 304H96C51.889 304 16 268.111 16 224C16 189.551 38.135 159.193 71.08 148.463L84.557 144.072L81.824 130.166C80.598 123.914 80 117.971 80 112C80 59.064 123.064 16 176 16C211.674 16 244.162 35.965 260.789 68.102L271.797 89.377L287.234 71.061C299.77 56.189 317.088 48 336 48C371.289 48 400 76.709 400 112C400 116.691 399.584 120.91 398.73 124.896L394.582 144.25H414.375C415.479 144.25 416.443 144.146 417.277 144.01C460.801 144.697 496 180.316 496 224C496 268.111 460.111 304 416 304Z" />
        </Icon>
    </>
}