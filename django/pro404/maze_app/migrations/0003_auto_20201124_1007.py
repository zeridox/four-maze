# Generated by Django 2.2 on 2020-11-24 10:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('maze_app', '0002_user_ager'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='ager',
            new_name='age',
        ),
    ]
