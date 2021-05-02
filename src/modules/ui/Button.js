/** @jsx jsx */
import {Button as ThemedButton, Text, jsx} from 'theme-ui';
import {Icon} from '@makerdao/dai-ui-icons';
import isNil from 'lodash/isNil';

import {Link} from '@modules/navigation';

const Button = ({
  to,
  href,
  variant,
  secondary,
  outline,
  text,
  small,
  disabled,
  children,
  inline,
  icon,
  sx,
  hideExternalIcon,
  ...otherProps
}) => {
  //NOTE(Rejon): This may seem outlandish, but we do this to ensure content creators write LESS code.
  //ie. We write this so they write
  //  <Button primary outline />
  // Instead of
  // <Button variant="primaryOutline" />
  let _variant = `${icon ? 'icon_' : ''}${
    variant || secondary
      ? 'secondary'
      : outline
      ? 'outline'
      : text
      ? 'text'
      : 'primary'
  }${small ? 'Small' : ''}`;

  const internal = /^\/(?!\/)/.test(href) || /^\/(?!\/)/.test(to);

  const willHaveIcon = icon || (!internal && !hideExternalIcon && !small);

  if (isNil(to) && isNil(href)) {
    return (
      <ThemedButton
        className="button"
        disabled={disabled}
        variant={_variant}
        sx={{
          p: willHaveIcon ? '13px 32px' : '',
          display: 'flex',
          alignItems: 'center',
          '& > *': {display: 'inline-block', mb: '0 !important'} //NOTE(Rejon): I use important here because we don't want child elements to dictate margins
        }}
        {...otherProps}>
        {willHaveIcon && (
          <Icon
            name={icon || 'increase'}
            className="increase"
            size={'20px'}
            sx={{
              ml: '2px',
              mr: '.5em',
              verticalAlign: 'middle'
            }}
          />
        )}

        <Text
          sx={{
            verticalAlign: willHaveIcon ? 'middle' : '',
            fontFamily: 'Miriam Libre'
          }}>
          {children}
        </Text>
      </ThemedButton>
    );
  }

  return (
    <Link
      to={to || href}
      disabled={disabled}
      hideExternalIcon={true}
      sx={{
        whiteSpace: 'nowrap',
        display: 'inline-block',
        cursor: disabled ? 'not-allowed' : '',
        fontWeight: '500',
        ...sx
      }}>
      <ThemedButton
        className="button"
        disabled={disabled}
        variant={_variant}
        sx={{
          p: willHaveIcon ? '13px 32px' : '',
          display: 'flex',
          alignItems: 'center',
          '& > *': {mb: '0 !important'} //NOTE(Rejon): I use important here because we don't want child elements to dictate margins
        }}
        {...otherProps}>
        {willHaveIcon && icon && (
          <Icon
            name={icon}
            className="increase"
            size={'20px'}
            sx={{
              ml: '2px',
              mr: '.5em',
              verticalAlign: 'middle'
            }}
          />
        )}

        <Text
          sx={{
            verticalAlign: willHaveIcon ? 'middle' : '',
            fontFamily: 'Miriam Libre'
          }}>
          {children}
        </Text>

        {willHaveIcon && !icon && (
          <Icon
            name={'increase'}
            className="increase"
            size={'20px'}
            sx={{
              ml: '.5em',
              verticalAlign: 'middle'
            }}
          />
        )}
      </ThemedButton>
    </Link>
  );
};
export default Button;
