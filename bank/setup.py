from setuptools import setup

if __name__ == "__main__":
    setup(
        install_requires=[
            "django-debug-toolbar",
            "django-extensions",
            "django-silk",
            "django",
            "djangorestframework",
            "drf-yasg",
            "randutils",
            "gunicorn",
            "psycopg2",
            "safe_environ",
        ],
        extras_require={
            "docs": [
                "sphinx",
                "pyimport",
                "pypandoc",
                "sphinxcontrib.apidoc",
                "sphinxcontrib.pandoc_markdown",
                "sphinx-autodoc-annotation",
                "yummy_sphinx_theme",
            ],
            "tests": [
                "pytest",
                "pytest-cov",
                "pytest-html",
                "pytest-sugar",
                "pytest-bdd",
                "pytest-watch",
            ],
        },
    )
