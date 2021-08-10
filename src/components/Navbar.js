import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar as BootstrapNavbar, Nav, Button, Col, Row } from 'react-bootstrap'
import Flags from 'country-flag-icons/react/3x2'

export default function Navbar(props) {
	const { handleUpdateLanguage } = props

	function onMouseEnter(e) {
		let navbar_nav = document.getElementsByClassName('navbar-nav')[0]
		let navbar_child = navbar_nav.children
		for (var i = 0; i < navbar_child.length; i++) {
			let navbar_link = navbar_child[i]
			if (navbar_link.id !== e.target.getAttribute('id')) {
				navbar_link.style.color = '#ffffff47'
			}
		}
	}

	function onMouseExit(e) {
		let navbar_nav = document.getElementsByClassName('navbar-nav')[0]
		let navbar_child = navbar_nav.children
		for (var i = 0; i < navbar_child.length; i++) {
			let navbar_link = navbar_child[i]
			navbar_link.style.color = 'white'
		}
	}

	return (
		<>
			<BootstrapNavbar className='navbar navbar-dark disable-select' expand='md'>
				<Link to='/' className='navbar_brand'>
					<BootstrapNavbar.Brand>React Wine</BootstrapNavbar.Brand>
				</Link>
				<BootstrapNavbar.Toggle aria-controls='basic-navbar-nav' />
				<BootstrapNavbar.Collapse id='basic-navbar-nav' className='navbar_nav'>
					<Nav className='mr-auto'>
						<NavLink
							exact
							id='navbar_wines'
							className='navbar_wines'
							activeClassName='current'
							to='/wines'
							onMouseEnter={(e) => onMouseEnter(e)}
							onMouseLeave={(e) => onMouseExit(e)}>
							Wines
						</NavLink>
						<NavLink
							exact
							id='navbar_story'
							className='navbar_story'
							activeClassName='current'
							to='/story'
							onMouseEnter={(e) => onMouseEnter(e)}
							onMouseLeave={(e) => onMouseExit(e)}>
							Story
						</NavLink>
						<NavLink
							exact
							id='navbar_winery'
							className='navbar_winery'
							activeClassName='current'
							to='/winery'
							onMouseEnter={(e) => onMouseEnter(e)}
							onMouseLeave={(e) => onMouseExit(e)}>
							Winery
						</NavLink>
						<NavLink
							exact
							id='navbar_contact'
							className='navbar_contact'
							activeClassName='current'
							to='/contact'
							onMouseEnter={(e) => onMouseEnter(e)}
							onMouseLeave={(e) => onMouseExit(e)}>
							Contact
						</NavLink>
					</Nav>
				</BootstrapNavbar.Collapse>
				<Col className='col_language'>
					<Button onClick={() => handleUpdateLanguage('en-US')} variant='dark' className='button_language_EN'>
						EN
						<Flags.US title='United States' className='flag_us' />
					</Button>
					<Button onClick={() => handleUpdateLanguage('fr-FR')} variant='dark' className='button_language_FR'>
						FR
						<Flags.FR title='France' className='flag_fr' />
					</Button>
					<Button onClick={() => handleUpdateLanguage('zh-CN')} variant='dark' className='button_language_CN'>
						中文
						<Flags.CN title='China' className='flag_cn' />
					</Button>
				</Col>
			</BootstrapNavbar>
		</>
	)
}
