import { css } from "@emotion/react"
import IAccount from "adapters/domains/entities/interfaces/IAccount"
import AccountItem from "./items/AccountItem"

export default function ResAccountList({
  response
}: {
  response?: Array<IAccount>
}) {
  const accounts = response || []

  return (
    <div>
      <ul
        css={css`
          li:not(:first-of-type) {
            margin-top: 0.5rem;
          }
        `}
      >
        {accounts.map((account) => (
          <li key={account.id}>
            <AccountItem account={account} />
          </li>
        ))}
      </ul>
    </div>
  )
}
