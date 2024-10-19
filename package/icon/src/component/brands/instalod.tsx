
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `instalod` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/instalod?s=brands instalod}
 * @preview ![instalod](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjwhLS0gRm9udCBBd2Vzb21lIFBybyA2LjAuMC1hbHBoYTIgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgLS0+PHBhdGggZD0iTTE1My4zODQsNDgwSDM4Ny4xMTNMNTAyLjU1NCwyNzUuNzY1LDIwNC4yMjksMzMzLjIxMVpNNTA0LjcyNiwyNDAuMDc4LDM4Ny4xMTMsMzJIMTU1LjY2OUwzNjAuMjMsMjY3LjlaTTEyNC4zODYsNDguODA5LDcuMjc0LDI1NiwxMjMuMjM2LDQ2MS4xNTQsMjI1LjYyNywxNjUuNTYxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Instalod(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M153.384,480H387.113L502.554,275.765,204.229,333.211ZM504.726,240.078,387.113,32H155.669L360.23,267.9ZM124.386,48.809,7.274,256,123.236,461.154,225.627,165.561Z" />
        </Icon>
    </>
}