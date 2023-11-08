// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
import { getUser, deleteUser } from './store'

// ** Icons Imports
import {
  Slack,
  User,
  Settings,
  Database,
  Edit2,
  MoreVertical,
  FileText,
  Trash2,
  Archive
} from 'react-feather'

// ** Reactstrap Imports
import {
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

// ** Renders Client Columns
const renderClient = (row) => {
  const stateNum = Math.floor(Math.random() * 6),
    states = [
      'light-success',
      'light-danger',
      'light-warning',
      'light-info',
      'light-primary',
      'light-secondary'
    ],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='me-1' img={row.avatar} width='32' height='32' />
  } else {
    return (
      <Avatar
        color={color || 'primary'}
        className='me-1'
        content={row.fullName || 'John Doe'}
        initials
      />
    )
  }
}

// ** Renders Role Columns
const renderRole = (row) => {
  const roleObj = {
    subscriber: {
      class: 'text-primary',
      icon: User
    },
    maintainer: {
      class: 'text-success',
      icon: Database
    },
    editor: {
      class: 'text-info',
      icon: Edit2
    },
    author: {
      class: 'text-warning',
      icon: Settings
    },
    admin: {
      class: 'text-danger',
      icon: Slack
    }
  }

  const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit2

  return (
    <span className='text-truncate text-capitalize align-middle'>
      <Icon
        size={18}
        className={`${roleObj[row.role] ? roleObj[row.role].class : ''} me-50`}
      />
      {row.role}
    </span>
  )
}

const statusObj = {
  pending: 'light-warning',
  active: 'light-success',
  inactive: 'light-secondary'
}

export const columns = [
  {
    // name: 'User',
    name: 'Product Vendor',
    sortable: true,
    minWidth: '300px',
    sortField: 'fullName',
    selector: (row) => row.fullName,
    cell: (row) => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <Link
            to={`/apps/user/view/${row.id}`}
            className='user_name text-truncate text-body'
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <span className='fw-bolder'>{row.fullName}</span>
          </Link>
          <small className='text-truncate text-muted mb-0'>{row.email}</small>
        </div>
      </div>
    )
  },
  // {
  //   name: 'Role',
  //   sortable: true,
  //   minWidth: '172px',
  //   sortField: 'role',
  //   selector: (row) => row.role,
  //   cell: (row) => renderRole(row)
  // },
  {
    // name: 'Plan',
    name: 'Phone',
    minWidth: '138px',
    sortable: true,
    sortField: 'currentPlan',
    selector: (row) => row.currentPlan,
    cell: (row) => <span className='text-capitalize'>{row.currentPlan}</span>
  },
  {
    // name: 'Billing',
    name: 'address',

    minWidth: '230px',
    sortable: true,
    sortField: 'billing',
    selector: (row) => row.billing,
    cell: (row) => <span className='text-capitalize'>{row.billing}</span>
  },
  {
    // name: 'Status',
    name: 'vendor bio',

    minWidth: '138px',
    sortable: true,
    sortField: 'status',
    selector: (row) => row.status,
    cell: (row) => (
      <Badge className='text-capitalize' color={statusObj[row.status]} pill>
        {row.status}
      </Badge>
    )
  },
  {
    name: 'Actions',
    minWidth: '100px',
    cell: (row) => (
      <div className='column-action'>
        <UncontrolledDropdown>
          <DropdownToggle tag='div' className='btn btn-sm'>
            <MoreVertical size={14} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              tag={Link}
              className='w-100'
              to={`/apps/user/view/${row.id}`}
              onClick={() => store.dispatch(getUser(row.id))}
            >
              <FileText size={14} className='me-50' />
              <span className='align-middle'>Details</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={(e) => e.preventDefault()}
            >
              <Archive size={14} className='me-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={(e) => {
                e.preventDefault()
                store.dispatch(deleteUser(row.id))
              }}
            >
              <Trash2 size={14} className='me-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]

// --------------------------------------------
export const columnsParcel = [
  {
    // name: 'User',
    name: 'product',
    sortable: true,
    minWidth: '300px',
    sortField: 'fullName',
    selector: (row) => row.fullName,
    cell: (row) => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <Link
            to={`/apps/user/view/${row.id}`}
            className='user_name text-truncate text-body'
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <span className='fw-bolder'>{row.fullName}</span>
          </Link>
          <small className='text-truncate text-muted mb-0'>{row.email}</small>
        </div>
      </div>
    )
  },
  // {
  //   name: 'Role',
  //   sortable: true,
  //   minWidth: '172px',
  //   sortField: 'role',
  //   selector: (row) => row.role,
  //   cell: (row) => renderRole(row)
  // },
  {
    // name: 'Plan',
    name: 'title',
    minWidth: '138px',
    sortable: true,
    sortField: 'currentPlan',
    selector: (row) => row.currentPlan,
    cell: (row) => <span className='text-capitalize'>{row.currentPlan}</span>
  },
  {
    // name: 'Status',
    name: 'price',

    minWidth: '138px',
    sortable: true,
    sortField: 'status',
    selector: (row) => row.status,
    cell: (row) => (
      <Badge className='text-capitalize' color={statusObj[row.status]} pill>
        {row.status}
      </Badge>
    )
  },
  {
    // name: 'Billing',
    name: 'Vendor',

    minWidth: '230px',
    sortable: true,
    sortField: 'billing',
    selector: (row) => row.billing,
    cell: (row) => <span className='text-capitalize'>{row.billing}</span>
  },
  {
    // name: 'Billing',
    name: 'description',
    minWidth: '230px',
    sortable: true,
    sortField: 'billing',
    selector: (row) => row.billing,
    cell: (row) => <span className='text-capitalize'>{row.billing}</span>
  },
  {
    name: 'Actions',
    minWidth: '100px',
    cell: (row) => (
      <div className='column-action'>
        <UncontrolledDropdown>
          <DropdownToggle tag='div' className='btn btn-sm'>
            <MoreVertical size={14} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              tag={Link}
              className='w-100'
              to={`/apps/user/view/${row.id}`}
              onClick={() => store.dispatch(getUser(row.id))}
            >
              <FileText size={14} className='me-50' />
              <span className='align-middle'>Details</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={(e) => e.preventDefault()}
            >
              <Archive size={14} className='me-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={(e) => {
                e.preventDefault()
                store.dispatch(deleteUser(row.id))
              }}
            >
              <Trash2 size={14} className='me-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]
// --------------------------------------------
export const columnsRiders = [
  {
    // name: 'User',
    name: 'Rider',
    sortable: true,
    minWidth: '300px',
    sortField: 'fullName',
    selector: (row) => row.fullName,
    cell: (row) => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <Link
            to={`/apps/user/view/${row.id}`}
            className='user_name text-truncate text-body'
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <span className='fw-bolder'>{row.fullName}</span>
          </Link>
          <small className='text-truncate text-muted mb-0'>{row.email}</small>
        </div>
      </div>
    )
  },
  // {
  //   name: 'Role',
  //   sortable: true,
  //   minWidth: '172px',
  //   sortField: 'role',
  //   selector: (row) => row.role,
  //   cell: (row) => renderRole(row)
  // },
  {
    // name: 'Plan',
    name: 'password',
    minWidth: '138px',
    sortable: true,
    sortField: 'currentPlan',
    selector: (row) => row.currentPlan,
    cell: (row) => <span className='text-capitalize'>{row.currentPlan}</span>
  },
  {
    // name: 'Billing',
    name: 'phone',

    minWidth: '230px',
    sortable: true,
    sortField: 'billing',
    selector: (row) => row.billing,
    cell: (row) => <span className='text-capitalize'>{row.billing}</span>
  },
  {
    // name: 'Billing',
    name: 'rider bio',

    minWidth: '230px',
    sortable: true,
    sortField: 'billing',
    selector: (row) => row.billing,
    cell: (row) => <span className='text-capitalize'>{row.billing}</span>
  },
  {
    // name: 'Billing',
    name: 'address',

    minWidth: '230px',
    sortable: true,
    sortField: 'billing',
    selector: (row) => row.billing,
    cell: (row) => <span className='text-capitalize'>{row.billing}</span>
  },
  {
    name: 'Actions',
    minWidth: '100px',
    cell: (row) => (
      <div className='column-action'>
        <UncontrolledDropdown>
          <DropdownToggle tag='div' className='btn btn-sm'>
            <MoreVertical size={14} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              tag={Link}
              className='w-100'
              to={`/apps/user/view/${row.id}`}
              onClick={() => store.dispatch(getUser(row.id))}
            >
              <FileText size={14} className='me-50' />
              <span className='align-middle'>Details</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={(e) => e.preventDefault()}
            >
              <Archive size={14} className='me-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={(e) => {
                e.preventDefault()
                store.dispatch(deleteUser(row.id))
              }}
            >
              <Trash2 size={14} className='me-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]
// --------------------------------------------
export const columnsAssignParcel = [
  {
    // name: 'User',
    name: 'product',
    sortable: true,
    minWidth: '300px',
    sortField: 'fullName',
    selector: (row) => row.fullName,
    cell: (row) => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <Link
            to={`/apps/user/view/${row.id}`}
            className='user_name text-truncate text-body'
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <span className='fw-bolder'>{row.fullName}</span>
          </Link>
          <small className='text-truncate text-muted mb-0'>{row.email}</small>
        </div>
      </div>
    )
  },
  // {
  //   name: 'Role',
  //   sortable: true,
  //   minWidth: '172px',
  //   sortField: 'role',
  //   selector: (row) => row.role,
  //   cell: (row) => renderRole(row)
  // },
  {
    // name: 'Plan',
    name: 'rider',
    minWidth: '138px',
    sortable: true,
    sortField: 'currentPlan',
    selector: (row) => row.currentPlan,
    cell: (row) => <span className='text-capitalize'>{row.currentPlan}</span>
  },
  {
    // name: 'Billing',
    name: 'mobile',

    minWidth: '230px',
    sortable: true,
    sortField: 'billing',
    selector: (row) => row.billing,
    cell: (row) => <span className='text-capitalize'>{row.billing}</span>
  },
  {
    // name: 'Billing',
    name: 'address',

    minWidth: '230px',
    sortable: true,
    sortField: 'billing',
    selector: (row) => row.billing,
    cell: (row) => <span className='text-capitalize'>{row.billing}</span>
  },
  {
    // name: 'Status',
    name: 'status',

    minWidth: '138px',
    sortable: true,
    sortField: 'status',
    selector: (row) => row.status,
    cell: (row) => (
      <Badge className='text-capitalize' color={statusObj[row.status]} pill>
        {row.status}
      </Badge>
    )
  },
  {
    name: 'Actions',
    minWidth: '100px',
    cell: (row) => (
      <div className='column-action'>
        <UncontrolledDropdown>
          <DropdownToggle tag='div' className='btn btn-sm'>
            <MoreVertical size={14} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              tag={Link}
              className='w-100'
              to={`/apps/user/view/${row.id}`}
              onClick={() => store.dispatch(getUser(row.id))}
            >
              <FileText size={14} className='me-50' />
              <span className='align-middle'>Details</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={(e) => e.preventDefault()}
            >
              <Archive size={14} className='me-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={(e) => {
                e.preventDefault()
                store.dispatch(deleteUser(row.id))
              }}
            >
              <Trash2 size={14} className='me-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]