
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cloud-showers-heavy` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-showers-heavy?s=thin cloud-showers-heavy}
 * @preview ![cloud-showers-heavy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMTI4QzQxNS4zNzUgMTI4IDQxNC44NzUgMTI4LjI1IDQxNC4zNzUgMTI4LjI1QzQxNS41IDEyMyA0MTYgMTE3LjYyNSA0MTYgMTEyQzQxNiA2Ny43NSAzODAuMjUgMzIgMzM2IDMyQzMxMS4zNzUgMzIgMjg5Ljc1IDQzLjI1IDI3NSA2MC43NUMyNTYuMzc1IDI0Ljc1IDIxOS4yNSAwIDE3NiAwQzExNC4xMjUgMCA2NCA1MC4xMjUgNjQgMTEyQzY0IDExOS4yNSA2NC43NSAxMjYuMjUgNjYuMTI1IDEzMy4yNUMyNy43NSAxNDUuNzUgMCAxODEuNSAwIDIyNEMwIDI3NyA0MyAzMjAgOTYgMzIwSDQxNkM0NjkgMzIwIDUxMiAyNzcgNTEyIDIyNFM0NjkgMTI4IDQxNiAxMjhaTTQxNiAzMDRIOTZDNTEuODg5IDMwNCAxNiAyNjguMTExIDE2IDIyNEMxNiAxODkuNTUxIDM4LjEzNSAxNTkuMTkzIDcxLjA4IDE0OC40NjNMODQuNTU3IDE0NC4wNzJMODEuODI0IDEzMC4xNjZDODAuNTk4IDEyMy45MTQgODAgMTE3Ljk3MSA4MCAxMTJDODAgNTkuMDY0IDEyMy4wNjQgMTYgMTc2IDE2QzIxMS42NzQgMTYgMjQ0LjE2MiAzNS45NjUgMjYwLjc4OSA2OC4xMDJMMjcxLjc5NyA4OS4zNzdMMjg3LjIzNCA3MS4wNjFDMjk5Ljc3IDU2LjE4OSAzMTcuMDg4IDQ4IDMzNiA0OEMzNzEuMjg5IDQ4IDQwMCA3Ni43MDkgNDAwIDExMkM0MDAgMTE2LjY5MSAzOTkuNTg0IDEyMC45MSAzOTguNzMgMTI0Ljg5NkwzOTQuNTgyIDE0NC4yNUg0MTQuMzc1QzQxNS40NzkgMTQ0LjI1IDQxNi40NDMgMTQ0LjE0NiA0MTcuMjc3IDE0NC4wMUM0NjAuODAxIDE0NC42OTcgNDk2IDE4MC4zMTYgNDk2IDIyNEM0OTYgMjY4LjExMSA0NjAuMTExIDMwNCA0MTYgMzA0Wk00MzIuODQ0IDM1Ni40MzhMMzYwLjg0NCA1MDAuNDM4QzM1OC44NzUgNTA0LjM3NSAzNjAuNDY5IDUwOS4xODggMzY0LjQyMiA1MTEuMTU2QzM2NS41NzggNTExLjcxOSAzNjYuNzk3IDUxMiAzNjggNTEyQzM3MC45MjIgNTEyIDM3My43NSA1MTAuMzc1IDM3NS4xNTYgNTA3LjU2Mkw0NDcuMTU2IDM2My41NjJDNDQ5LjEyNSAzNTkuNjI1IDQ0Ny41MzEgMzU0LjgxMiA0NDMuNTc4IDM1Mi44NDRDNDM5LjY0MSAzNTAuOTA2IDQzNC44NDQgMzUyLjQ2OSA0MzIuODQ0IDM1Ni40MzhaTTMxMi44NDQgMzU2LjQzOEwyNDAuODQ0IDUwMC40MzhDMjM4Ljg3NSA1MDQuMzc1IDI0MC40NjkgNTA5LjE4OCAyNDQuNDIyIDUxMS4xNTZDMjQ1LjU3OCA1MTEuNzE5IDI0Ni43OTcgNTEyIDI0OCA1MTJDMjUwLjkyMiA1MTIgMjUzLjc1IDUxMC4zNzUgMjU1LjE1NiA1MDcuNTYyTDMyNy4xNTYgMzYzLjU2MkMzMjkuMTI1IDM1OS42MjUgMzI3LjUzMSAzNTQuODEyIDMyMy41NzggMzUyLjg0NEMzMTkuNjQxIDM1MC45MDYgMzE0Ljg0NCAzNTIuNDY5IDMxMi44NDQgMzU2LjQzOFpNMTkyLjg0NCAzNTYuNDM4TDEyMC44NDQgNTAwLjQzOEMxMTguODc1IDUwNC4zNzUgMTIwLjQ2OSA1MDkuMTg4IDEyNC40MjIgNTExLjE1NkMxMjUuNTc4IDUxMS43MTkgMTI2Ljc5NyA1MTIgMTI4IDUxMkMxMzAuOTIyIDUxMiAxMzMuNzUgNTEwLjM3NSAxMzUuMTU2IDUwNy41NjJMMjA3LjE1NiAzNjMuNTYyQzIwOS4xMjUgMzU5LjYyNSAyMDcuNTMxIDM1NC44MTIgMjAzLjU3OCAzNTIuODQ0QzE5OS42NDEgMzUwLjkwNiAxOTQuODQ0IDM1Mi40NjkgMTkyLjg0NCAzNTYuNDM4Wk03Mi44NDQgMzU2LjQzOEwwLjg0NCA1MDAuNDM4Qy0xLjEyNSA1MDQuMzc1IDAuNDY5IDUwOS4xODggNC40MjIgNTExLjE1NkM1LjU3OCA1MTEuNzE5IDYuNzk3IDUxMiA4IDUxMkMxMC45MjIgNTEyIDEzLjc1IDUxMC4zNzUgMTUuMTU2IDUwNy41NjJMODcuMTU2IDM2My41NjJDODkuMTI1IDM1OS42MjUgODcuNTMxIDM1NC44MTIgODMuNTc4IDM1Mi44NDRDNzkuNjQxIDM1MC45MDYgNzQuODQ0IDM1Mi40NjkgNzIuODQ0IDM1Ni40MzhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CloudShowersHeavy(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M416 128C415.375 128 414.875 128.25 414.375 128.25C415.5 123 416 117.625 416 112C416 67.75 380.25 32 336 32C311.375 32 289.75 43.25 275 60.75C256.375 24.75 219.25 0 176 0C114.125 0 64 50.125 64 112C64 119.25 64.75 126.25 66.125 133.25C27.75 145.75 0 181.5 0 224C0 277 43 320 96 320H416C469 320 512 277 512 224S469 128 416 128ZM416 304H96C51.889 304 16 268.111 16 224C16 189.551 38.135 159.193 71.08 148.463L84.557 144.072L81.824 130.166C80.598 123.914 80 117.971 80 112C80 59.064 123.064 16 176 16C211.674 16 244.162 35.965 260.789 68.102L271.797 89.377L287.234 71.061C299.77 56.189 317.088 48 336 48C371.289 48 400 76.709 400 112C400 116.691 399.584 120.91 398.73 124.896L394.582 144.25H414.375C415.479 144.25 416.443 144.146 417.277 144.01C460.801 144.697 496 180.316 496 224C496 268.111 460.111 304 416 304ZM432.844 356.438L360.844 500.438C358.875 504.375 360.469 509.188 364.422 511.156C365.578 511.719 366.797 512 368 512C370.922 512 373.75 510.375 375.156 507.562L447.156 363.562C449.125 359.625 447.531 354.812 443.578 352.844C439.641 350.906 434.844 352.469 432.844 356.438ZM312.844 356.438L240.844 500.438C238.875 504.375 240.469 509.188 244.422 511.156C245.578 511.719 246.797 512 248 512C250.922 512 253.75 510.375 255.156 507.562L327.156 363.562C329.125 359.625 327.531 354.812 323.578 352.844C319.641 350.906 314.844 352.469 312.844 356.438ZM192.844 356.438L120.844 500.438C118.875 504.375 120.469 509.188 124.422 511.156C125.578 511.719 126.797 512 128 512C130.922 512 133.75 510.375 135.156 507.562L207.156 363.562C209.125 359.625 207.531 354.812 203.578 352.844C199.641 350.906 194.844 352.469 192.844 356.438ZM72.844 356.438L0.844 500.438C-1.125 504.375 0.469 509.188 4.422 511.156C5.578 511.719 6.797 512 8 512C10.922 512 13.75 510.375 15.156 507.562L87.156 363.562C89.125 359.625 87.531 354.812 83.578 352.844C79.641 350.906 74.844 352.469 72.844 356.438Z" />
        </Icon>
    </>
}