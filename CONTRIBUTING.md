# Contributing Guide

Thank you for your interest in contributing to this Next.js boilerplate! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

Before creating an issue, please:

1. **Search existing issues** to avoid duplicates
2. **Check the documentation** for solutions
3. **Use the issue templates** when available

When reporting bugs, include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node.js version, etc.)
- Screenshots if applicable

### Suggesting Features

For feature requests:
- Describe the feature clearly
- Explain the use case and benefits
- Consider implementation complexity
- Check if similar features exist

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Add tests** if applicable
5. **Update documentation** if needed
6. **Submit a pull request**

## 📋 Development Setup

### Prerequisites

- Node.js 18+
- npm 8+
- Git

### Setup Steps

1. **Fork and clone**
   ```bash
   git clone https://github.com/ahmad-gurmani/nextjs-modern-boilerplate.git
   cd nextjs-modern-boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Start development**
   ```bash
   npm run dev
   ```

## 🎯 Contribution Areas

### Code Contributions

- **Bug fixes** - Fix existing issues
- **Feature additions** - Add new functionality
- **Performance improvements** - Optimize existing code
- **Refactoring** - Improve code structure
- **Type safety** - Enhance TypeScript usage

### Documentation

- **README updates** - Improve setup instructions
- **Code comments** - Add inline documentation
- **API documentation** - Document endpoints
- **Tutorials** - Create learning resources

### Testing

- **Unit tests** - Test individual components
- **Integration tests** - Test component interactions
- **E2E tests** - Test user workflows
- **Performance tests** - Test application performance

### Design

- **UI improvements** - Enhance user interface
- **Accessibility** - Improve a11y compliance
- **Responsive design** - Mobile optimization
- **Dark mode** - Theme improvements

## 📝 Code Standards

### TypeScript

- Use strict TypeScript configuration
- Define proper interfaces and types
- Avoid `any` type usage
- Use proper return types

### React

- Use functional components with hooks
- Follow React best practices
- Use proper prop types
- Implement proper error boundaries

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Implement dark mode support
- Use consistent spacing and colors

### Code Style

- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful commit messages
- Use conventional commit format

## 🧪 Testing Guidelines

### Writing Tests

```tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    screen.getByText('Click me').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Test Requirements

- Write tests for new features
- Maintain test coverage above 70%
- Use descriptive test names
- Test both success and error cases

## 📚 Documentation Standards

### Code Comments

```tsx
/**
 * Custom hook for managing user authentication state
 * @returns {Object} Authentication state and methods
 */
export function useAuth() {
  // Implementation
}
```

### README Updates

- Keep setup instructions current
- Include code examples
- Update feature lists
- Maintain links and references

## 🔄 Pull Request Process

### Before Submitting

1. **Run tests**
   ```bash
   npm run test
   npm run type-check
   npm run lint
   ```

2. **Check formatting**
   ```bash
   npm run format:check
   ```

3. **Build locally**
   ```bash
   npm run build
   ```

### PR Requirements

- [ ] Tests pass
- [ ] Code is properly formatted
- [ ] TypeScript checks pass
- [ ] Documentation is updated
- [ ] Commit messages follow convention
- [ ] PR description is clear

### Review Process

1. **Automated checks** must pass
2. **Code review** by maintainers
3. **Testing** in different environments
4. **Documentation review**
5. **Final approval** and merge

## 🏷️ Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

feat(auth): add OAuth login support
fix(ui): resolve button alignment issue
docs(readme): update installation steps
style(components): format code with prettier
refactor(api): simplify user endpoint logic
test(auth): add login form tests
chore(deps): update dependencies
```

### Types

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test additions/changes
- `chore`: Build/tooling changes

## 🚫 What Not to Contribute

- Code that breaks existing functionality
- Features without proper tests
- Changes that reduce accessibility
- Code that doesn't follow style guidelines
- Large refactors without discussion

## 💡 Getting Help

### Resources

- **Documentation** - Check existing docs first
- **Issues** - Search for similar problems
- **Discussions** - Ask questions in discussions
- **Community** - Join our community channels

### Contact

- **GitHub Issues** - For bugs and features
- **GitHub Discussions** - For questions
- **Email** - For security issues

## 🎉 Recognition

Contributors will be:
- Listed in the README
- Mentioned in release notes
- Given credit in commit history
- Invited to maintainer discussions

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🙏
