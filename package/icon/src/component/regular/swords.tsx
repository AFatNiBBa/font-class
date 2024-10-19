
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `swords` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/swords?s=regular swords}
 * @preview ![swords](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDcuMjI3IDQ2Mi4wNTlMNDQ3Ljk4NCA0MDIuODA2TDQ3OS42MDUgMzQzLjgwMkM0ODIuOTggMzM3LjU1MSA0ODEuODU1IDMyOS45MjYgNDc2Ljg1NiAzMjQuOTI2TDQ1OS4yMzIgMzA3LjQyNUM0NTIuOTgzIDMwMS4xNzQgNDQyLjg1OSAzMDEuMTc0IDQzNi42MSAzMDcuNDI1TDQxOS45ODcgMzI0LjA1MUwxMTIuMDE5IDE2LjAzMUwxOC4yNzggMC4xNTVDOC4yNzkgLTEuMjIgLTEuMzQ1IDcuMTU2IDAuMTU1IDE4LjI4MUwxNi4wMjggMTEyLjAzN0wzMjMuOTk3IDQyMC4wNTdMMzA3LjM3MyA0MzYuNjgzQzMwMS4xMjQgNDQyLjkzMyAzMDEuMTI0IDQ1My4wNTkgMzA3LjM3MyA0NTkuMzA5TDMyNC44NzEgNDc2LjkzNUMzMjkuODcxIDQ4MS45MzYgMzM3LjQ5NSA0ODMuMDYxIDM0My43NDQgNDc5LjY4NUw0MDIuNzM4IDQ0OC4wNThMNDYxLjk4MiA1MDcuMzEyQzQ2OC4yMzEgNTEzLjU2MyA0NzguNDggNTEzLjU2MyA0ODQuNzMgNTA3LjMxMkw1MDcuMjI3IDQ4NC44MTFDNTEzLjQ3NyA0NzguNTYgNTEzLjQ3NyA0NjguMzEgNTA3LjIyNyA0NjIuMDU5Wk0zNTcuOTkzIDM4Ni4wNTVMNjAuNzc0IDg4LjkxMUw1NS4wMjQgNTUuMDM0TDg4Ljg5NiA2MC43ODRMMzg2LjExNSAzNTguMDUzTDM1Ny45OTMgMzg2LjA1NVpNNDIzLjExMSA2MC43ODRMNDU2Ljk4MyA1NS4wMzRMNDUxLjIzMyA4OC45MTFMMzQwLjc0NSAxOTkuNDE4TDM3NC42MTYgMjMzLjQyTDQ5NS45NzkgMTEyLjAzN0w1MTEuODUyIDE4LjI4MUM1MTMuMjI3IDguMjgxIDUwNC44NTMgLTEuMzQ1IDQ5My43MjkgMC4xNTVMMzk5Ljk4OSAxNi4wMzFMMjc4LjYyNiAxMzcuNDE0TDMxMi42MjMgMTcxLjI5MUw0MjMuMTExIDYwLjc4NFpNMTk5LjUwOSAzNDAuODAyTDE1NC4xMzkgMzg2LjE4TDEyNi4wMTcgMzU4LjA1M0wxNzEuMzg3IDMxMi42NzVMMTM3LjM5MSAyNzguNjczTDkyLjAyMSAzMjQuMDUxTDc1LjM5NyAzMDcuNDI1QzY5LjE0OCAzMDEuMTc0IDU5LjAyNCAzMDEuMTc0IDUyLjc3NSAzMDcuNDI1TDM1LjE1MSAzMjQuOTI2QzMwLjE1MiAzMjkuOTI2IDI5LjAyNyAzMzcuNTUxIDMyLjQwMiAzNDMuODAyTDY0LjAyNCA0MDIuODA2TDQuNzggNDYyLjA1OUMtMS40NyA0NjguMzEgLTEuNDcgNDc4LjU2IDQuNzggNDg0LjgxMUwyNy4yNzcgNTA3LjMxMkMzMy41MjcgNTEzLjU2MyA0My43NzYgNTEzLjU2MyA1MC4wMjUgNTA3LjMxMkwxMDkuMjY5IDQ0OC4wNThMMTY4LjI2MyA0NzkuNjg1QzE3NC41MTIgNDgzLjA2MSAxODIuMTM2IDQ4MS45MzYgMTg3LjEzNiA0NzYuOTM1TDIwNC42MzQgNDU5LjMwOUMyMTAuODgzIDQ1My4wNTkgMjEwLjg4MyA0NDIuOTMzIDIwNC42MzQgNDM2LjY4M0wxODguMDExIDQyMC4wNTdMMjMzLjM4MSAzNzQuNjc5TDE5OS41MDkgMzQwLjgwMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Swords(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M507.227 462.059L447.984 402.806L479.605 343.802C482.98 337.551 481.855 329.926 476.856 324.926L459.232 307.425C452.983 301.174 442.859 301.174 436.61 307.425L419.987 324.051L112.019 16.031L18.278 0.155C8.279 -1.22 -1.345 7.156 0.155 18.281L16.028 112.037L323.997 420.057L307.373 436.683C301.124 442.933 301.124 453.059 307.373 459.309L324.871 476.935C329.871 481.936 337.495 483.061 343.744 479.685L402.738 448.058L461.982 507.312C468.231 513.563 478.48 513.563 484.73 507.312L507.227 484.811C513.477 478.56 513.477 468.31 507.227 462.059ZM357.993 386.055L60.774 88.911L55.024 55.034L88.896 60.784L386.115 358.053L357.993 386.055ZM423.111 60.784L456.983 55.034L451.233 88.911L340.745 199.418L374.616 233.42L495.979 112.037L511.852 18.281C513.227 8.281 504.853 -1.345 493.729 0.155L399.989 16.031L278.626 137.414L312.623 171.291L423.111 60.784ZM199.509 340.802L154.139 386.18L126.017 358.053L171.387 312.675L137.391 278.673L92.021 324.051L75.397 307.425C69.148 301.174 59.024 301.174 52.775 307.425L35.151 324.926C30.152 329.926 29.027 337.551 32.402 343.802L64.024 402.806L4.78 462.059C-1.47 468.31 -1.47 478.56 4.78 484.811L27.277 507.312C33.527 513.563 43.776 513.563 50.025 507.312L109.269 448.058L168.263 479.685C174.512 483.061 182.136 481.936 187.136 476.935L204.634 459.309C210.883 453.059 210.883 442.933 204.634 436.683L188.011 420.057L233.381 374.679L199.509 340.802Z" />
        </Icon>
    </>
}