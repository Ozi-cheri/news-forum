# Generated by Django 3.2.25 on 2024-12-01 16:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0002_auto_20241130_1622'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='News',
            new_name='Post',
        ),
    ]
